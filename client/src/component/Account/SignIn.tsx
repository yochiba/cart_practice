import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Common from '../../Common';
import Axios from 'axios';

const SignIn: React.FC = () => {
  // State管理
  const [accountSignIn, setAccountSignIn] = useState<Common.AccountSignIn>(Common.initialAccountSignIn);

  const onChangeSignInInput = (e: any) => {
    const name: string = e.target.name;
    const value: string = e.target.value;

    switch (name) {
      case 'email':
        setAccountSignIn({...accountSignIn, email: value})
        break;
      case 'password':
        setAccountSignIn({...accountSignIn, password: value})
        break;
      default:
        break;
    }
  }

  const signInInputs = () => {
    return (
      Common.SIGN_IN_FORMAT.map((signInData: Common.InputFormat) => {
        return (
          <div className={signInData.name}>
            <label htmlFor={`sign-in-${signInData.name}`}>{signInData.displayName}</label>
            <input
              type={signInData.type}
              id={`sign-in-${signInData.name}`}
              name={signInData.name}
              onChange={(e) => {onChangeSignInInput(e)}}
            />
          </div>
        );
      })
    );
  }

  const handleSubmitAccountData = (e: any) => {
    e.preventDefault();

    Axios.post(`http://localhost/api/v1/auth/sign_in`, accountSignIn, {headers: Common.headers})
    .then(res => {
      console.log(res);
      setAccountSignIn(Common.initialAccountSignIn);
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <div className='SignIn'>
      <h1>SignIn</h1>
      <form onSubmit={(e) => {handleSubmitAccountData(e)}}>
        {signInInputs()}
        <input type='submit' value='ログイン' />
      </form>
      <Link to='/sign-up'>新規登録</Link>
    </div>
  );
}

export default SignIn;
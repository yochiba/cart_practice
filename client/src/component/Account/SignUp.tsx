import React, { useState } from 'react';
import Common from '../../Common';
import Axios from 'axios';

const SignUp: React.FC = () => {
  // State管理
  const [accountSignUp, setAccountSignUp] = useState<Common.AccountSignUp>(Common.initialAccountSignUp);
  const [modalFlag, setModalFlag] = useState<boolean>(false);

  const onChangeSignUpInput = (e: any) => {
    const name: string = e.target.name;
    const value: string = e.target.value;

    switch (name) {
      case 'firstname':
        setAccountSignUp({...accountSignUp, firstname: value})
        break;
      case 'lastname':
        setAccountSignUp({...accountSignUp, lastname: value})
        break;
      case 'email':
        setAccountSignUp({...accountSignUp, email: value})
        break;
      case 'phone':
        setAccountSignUp({...accountSignUp, phone: value})
        break;
      case 'password':
        setAccountSignUp({...accountSignUp, password: value})
        break;
      case 'password_confirmation':
        setAccountSignUp({...accountSignUp, password_confirmation: value})
        break;
      default:
        break;
    }
  }

  const signUpInputs = () => {
    return (
      Common.SIGN_UP_FORMAT.map((signUpData: Common.InputFormat) => {
        return (
          <div className={signUpData.name}>
            <label htmlFor={`sign-up-${signUpData.name}`}>{signUpData.displayName}</label>
            <input
              type={signUpData.type}
              id={`sign-up-${signUpData.name}`}
              name={signUpData.name}
              onChange={(e) => {onChangeSignUpInput(e)}}
            />
          </div>
        );
      })
    );
  }

  const inputValue = (name: string, displayName: string) => {
    let value: string = '';
    switch (name) {
      case 'firstname':
        value = accountSignUp.firstname;
        break;
      case 'lastname':
        value = accountSignUp.lastname;
        break;
      case 'email':
        value = accountSignUp.email;
        break;
      case 'phone':
        value = accountSignUp.phone;
        break;
      case 'password':
        value = accountSignUp.password;
        break;
      default:
        break;
    }

    if (name === 'password') {
      return (
        <>
          <label htmlFor={`sign-up-confirmation-${name}`}>{displayName}: ******</label>
          <input
            type='hidden'
            id={`sign-up-confirmation-${name}`}
            name={name}
            value={value}
          />
          <input
            type='hidden'
            id={`sign-up-confirmation-${name}_confirmation`}
            name={`${name}_confirmation`}
            value={accountSignUp.password_confirmation}
          />
        </>
      );
    } else {
      return (
        <>
          <label htmlFor={`sign-up-confirmation-${name}`}>{displayName}: {value}</label>
          <input
            type='hidden'
            id={`sign-up-confirmation-${name}`}
            name={name}
            value={value}
          />
        </>
      );
    }
  }

  const signUpConfirmationInputs = () => {
    return (
      Common.SIGN_UP_FORMAT.map((signUpData: Common.InputFormat) => {
        if (signUpData.name !== 'password_confirmation') {
          return (
            <div className={`${signUpData.name}`}>
              {inputValue(signUpData.name, signUpData.displayName)}
            </div>
          );
        } else {
          return null;
        }
      })
    );
  }

  const confirmationModal = () => {
    if (modalFlag) {
      return (
        <form onSubmit={(e) => {handleSubmitAccountData(e)}}>
          {signUpConfirmationInputs()}
          <button onClick={()=> setModalFlag(false)}>内容修正</button>
          <input
            type='submit'
            value='登録'
          />
        </form>
      );
    } else {
      return null;
    }
  }

  const handleSubmitAccountData = (e: any) => {
    e.preventDefault();

    Axios.post(`http://localhost/api/v1/auth`, accountSignUp, {headers: Common.headers})
    .then(res => {
      console.log(res);
      setAccountSignUp(Common.initialAccountSignUp);
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <div className='SignUp'>
      <h1>SignUp</h1>
      {signUpInputs()}
      <button onClick={()=> setModalFlag(true)}>内容確認</button>
      {confirmationModal()}
    </div>
  );
}

export default SignUp;
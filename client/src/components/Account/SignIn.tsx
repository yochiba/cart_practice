import React, { useState } from 'react';
import { AppState } from '../../stores/index';
import { AccountState, accountActions } from '../../stores/Account';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import Util from '../../Common/Util';
import Headers from '../../Common/Headers';
import Api from '../../Common/Api';
import Axios from 'axios';

const SignIn: React.FC = () => {
  // Redux
  const accountStore: AccountState = useSelector<AppState, AccountState>(state => state.accountStore);
  const accountDispatch = useDispatch();

  // State管理
  const [accountSignIn, setAccountSignIn] = useState<Util.AccountSignIn>(Util.initialAccountSignIn);

  // サインインフォームのInputハンドリング
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
      Util.SIGN_IN_FORMAT.map((signInData: Util.InputFormat) => {
        return (
          <div className={signInData.name}>
            <label
              htmlFor={`sign-in-${signInData.name}`}
              key={`sign-in-label-${signInData.name}`}
            >
              {signInData.displayName}
            </label>
            <input
              type={signInData.type}
              id={`sign-in-${signInData.name}`}
              name={signInData.name}
              onChange={(e) => {onChangeSignInInput(e)}}
              key={`sign-in-input-${signInData.name}`}
            />
          </div>
        );
      })
    );
  }

  const handleSubmitSignIn = (e: any) => {
    e.preventDefault();

    Axios.post(Api.accountSignIn, accountSignIn, {headers: Headers.axiosPost})
    .then(res => {
      // dispatch
      accountDispatch(accountActions.updateId(Number(res.data.data.id)));
      accountDispatch(accountActions.updateAccessToken(res.headers['access-token']));
      accountDispatch(accountActions.updateProvider(res.data.data.provider));
      accountDispatch(accountActions.updateClient(res.headers['client']));
      accountDispatch(accountActions.updateUid(res.data.data.uid));
      accountDispatch(accountActions.updateFirstname(res.data.data.firstname));
      accountDispatch(accountActions.updateLastname(res.data.data.lastname));

      setAccountSignIn(Util.initialAccountSignIn);
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <div className='SignIn'>
      <h1>SignIn</h1>
      <form onSubmit={(e) => {handleSubmitSignIn(e)}}>
        {signInInputs()}
        <input type='submit' value='ログイン' />
      </form>
      <Link to='/sign-up'>新規登録</Link>
    </div>
  );
}

export default SignIn;
import React, { useState } from 'react';
import { AppState } from '../../stores/index';
import { AccountState, accountActions } from '../../stores/Account';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import Util from '../../Common/Util';
import Headers from '../../Common/Headers';
import Api from '../../Common/Api';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
          <Form.Group className='mb-3' controlId='formSignIn'>
            <Form.Label>{signInData.displayName}</Form.Label>
            <Form.Control
              type={signInData.type}
              name={signInData.name}
              placeholder={signInData.displayName}
              onChange={(e) => {onChangeSignInInput(e)}}
              key={`sign-in-input-${signInData.name}`}
            />
          </Form.Group>
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
      <Form onSubmit={(e) => {handleSubmitSignIn(e)}}>
        {signInInputs()}
        <Button variant='primary' type='submit'>
          ログイン
        </Button>
      </Form>
      <Link to='/sign-up'>新規登録</Link>
    </div>
  );
}

export default SignIn;
import React, { useState } from 'react';
import Axios from 'axios';

// 新規登録のデータフォーマット
const SIGN_UP_FORMAT: SignUpFormat[] = [
  {
    displayName: '姓',
    name: 'lastname',
    type: 'text',
  },
  {
    displayName: '名',
    name: 'firstname',
    type: 'text',
  },
  {
    displayName: 'Email',
    name: 'email',
    type: 'email',
  },
  {
    displayName: '電話番号',
    name: 'phone',
    type: 'tel',
  },
  {
    displayName: 'パスワード',
    name: 'password',
    type: 'password',
  },
  {
    displayName: 'パスワード確認',
    name: 'password_confirmation',
    type: 'password',
  }
];

type AccountSignUp = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  password: string;
  password_confirmation: string;
}

const initialAccountSignUp: AccountSignUp = {
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  password: '',
  password_confirmation: '',
}

type SignUpFormat = {
  displayName: string;
  name: string;
  type: string;
}

const SignUp: React.FC = () => {
  // State管理
  const [accountSignUp, setAccountSignUp] = useState<AccountSignUp>(initialAccountSignUp);

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
      SIGN_UP_FORMAT.map((signUpData: SignUpFormat) => {
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

  return (
    <div className='SignUp'>
      <h1>SignUp</h1>
      <form>
        {signUpInputs()}
        
        <input type='submit' value='内容の確認' />
      </form>
    </div>
  );
}

export default SignUp;
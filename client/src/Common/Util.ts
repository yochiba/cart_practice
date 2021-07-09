namespace Util {
  // HOST
  export const hostUrl: string = 'http://localhost';
  // cart type
  export type CartProduct = {
    id: number;
    name: string;
    price: number;
    serial_number: string;
    category_id: number;
    count: number;
    stock: number;
  };

  export const initialCartProductList: CartProduct[] = [];

  // inputFormat
  export type InputFormat = {
    displayName: string;
    name: string;
    type: string;
　};

  // アカウント新規登録
  export type AccountSignUp = {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    password: string;
    password_confirmation: string;
  };

  export const initialAccountSignUp: AccountSignUp = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: '',
  };

  // 新規登録のデータフォーマット
  export const SIGN_UP_FORMAT: InputFormat[] = [
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

  // アカウント ログイン
  export type AccountSignIn = {
    email: string;
    password: string;
  };

  export const initialAccountSignIn: AccountSignIn = {
    email: '',
    password: '',
  };

  // アカウント ログイン
  export const SIGN_IN_FORMAT: InputFormat[] = [
    {
      displayName: 'Email',
      name: 'email',
      type: 'email',
    },
    {
      displayName: 'パスワード',
      name: 'password',
      type: 'password',
    },
  ];
};

export default Util;
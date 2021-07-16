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

  // フォーム inputFormat
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
    zip: string;
    address_one: string;
    address_two: string;
    address_three: string;
    password: string;
    password_confirmation: string;
  };

  // アカウント新規登録 初期値
  export const initialAccountSignUp: AccountSignUp = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    zip: '',
    address_one: '',
    address_two: '',
    address_three: '',
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
      displayName: '郵便番号',
      name: 'zip',
      type: 'text',
    },
    {
      displayName: '住所1',
      name: 'address_one',
      type: 'text',
    },
    {
      displayName: '住所2',
      name: 'address_two',
      type: 'text',
    },
    {
      displayName: '住所3',
      name: 'address_three',
      type: 'text',
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
    },
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

  // 購入情報
  export type Purchase = {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    password: string;
    password_confirmation: string;
  };

  // 購入情報 初期値
  export const initialPurchase: Purchase = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: '',
  };

  // 購入情報登録
  export const PURCHASE_FORMAT: InputFormat[] = [
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
      type: 'text',
    },
    {
      displayName: '電話番号',
      name: 'phone',
      type: 'text',
    },
    {
      displayName: '購入者 郵便番号',
      name: 'purchaser_zip',
      type: 'text',
    },
    {
      displayName: '購入者 住所1',
      name: 'purchaser_address_1',
      type: 'text',
    },
    {
      displayName: '購入者 住所2',
      name: 'purchaser_address_2',
      type: 'text',
    },
    {
      displayName: '購入者 住所3',
      name: 'purchaser_address_3',
      type: 'text',
    },
    {
      displayName: 'お届け先 郵便番号',
      name: 'delivery_zip',
      type: 'text',
    },
    {
      displayName: 'お届け先 住所1',
      name: 'delivery_address_1',
      type: 'text',
    },
    {
      displayName: 'お届け先 住所2',
      name: 'delivery_address_2',
      type: 'text',
    },
    {
      displayName: 'お届け先 住所3',
      name: 'delivery_address_3',
      type: 'text',
    },
    {
      displayName: 'お支払い方法',
      name: 'delivery_payment_type',
      type: 'radio',
    },
    {
      displayName: '配送方法',
      name: 'delivery_shipping_type',
      type: 'text',
    },
    {
      displayName: 'その他 要望等',
      name: 'message',
      type: 'text_area',
    },
  ];
};

export default Util;
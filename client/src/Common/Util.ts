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
      displayName: '都道府県 市区町村',
      name: 'address_one',
      type: 'text',
    },
    {
      displayName: '番地',
      name: 'address_two',
      type: 'text',
    },
    {
      displayName: '建物名',
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

  // 購入履歴 データ型
  export type PurchaseHistory = {
    payment_type: number;
    payment_status: number;
    delivery_type: number;
    delivery_status: number;
    message: string;
    total_price: number;
  };

  // 購入履歴 初期値
  export const initialPurchaseHistory: PurchaseHistory = {
    payment_type: 0,
    payment_status: 0,
    delivery_type: 0,
    delivery_status: 0,
    message: '',
    total_price: 0,
  };

  // 購入履歴 登録フォーマット
  export const PURCHASE_HISTORY_FORMAT: InputFormat[] = [
    {
      displayName: 'お支払い方法',
      name: 'payment_type',
      type: 'radio',
    },
    {
      displayName: 'お支払い状況',
      name: 'payment_status',
      type: 'hidden',
    },
    {
      displayName: '配達方法',
      name: 'delivery_type',
      type: 'radio',
    },
    {
      displayName: '配達状況',
      name: 'delivery_status',
      type: 'hidden',
    },
    {
      displayName: 'その他 要望等',
      name: 'message',
      type: 'text_area',
    },
    {
      displayName: '合計金額',
      name: 'total_price',
      type: 'hidden',
    },
  ];

  export type typeOption = {
    name: string;
    value: number;
  }

  // 支払い方法 オプション
  export const paymentTypeOptions: typeOption[] = [
    {
      name: '代金引換',
      value: 0,
    },
    {
      name: 'クレジットカード',
      value: 1,
    },
  ];

  // 支払い状況 オプション
  export const paymentStatusOptions: typeOption[] = [
    {
      name: '支払い待ち',
      value: 0,
    },
    {
      name: '支払い済み',
      value: 1,
    },
    {
      name: '支払いエラー 要確認',
      value: 2,
    },
  ];

  // 配達方法 オプション
  export const deliveryTypeOptions: typeOption[] = [
    {
      name: 'お届け(玄関)',
      value: 0,
    },
    {
      name: 'お届け(宅配BOX)',
      value: 1,
    },
    {
      name: 'コンビニ受け取り',
      value: 2,
    },
  ];

  // 配達状況 オプション
  export const deliveryStatusOptions: typeOption[] = [
    {
      name: '配達準備中',
      value: 0,
    },
    {
      name: '配達中',
      value: 1,
    },
    {
      name: '配達済み',
      value: 2,
    },
    {
      name: '配達エラー 要確認',
      value: 3,
    },
  ];

  // 配送先 データ型
  export type Delivery = {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    zip: string;
    address_one: string;
    address_two: string;
    address_three: string;
  }

  // 配送先 初期値
  export const initialDelivery: Delivery = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    zip: '',
    address_one: '',
    address_two: '',
    address_three: '',
  }

  // 配送先 登録フォーマット
  export const DELIVERY_FORMAT: InputFormat[] = [
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
      displayName: '配送先 郵便番号',
      name: 'zip',
      type: 'text',
    },
    {
      displayName: '配送先 都道府県 市区町村',
      name: 'address_one',
      type: 'text',
    },
    {
      displayName: '配送先 番地',
      name: 'address_two',
      type: 'text',
    },
    {
      displayName: '配送先 建物名',
      name: 'address_three',
      type: 'text',
    },
  ];
};

export default Util;
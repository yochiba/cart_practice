namespace Api {
  // POST アカウント サインアップ
  export const accountSignUp: string = 'http://localhost/api/v1/auth';
  // POST アカウント サインイン
  export const accountSignIn: string = 'http://localhost/api/v1/auth/sign_in';
  // DELETE アカウント サインアウト
  export const accountSignOut: string = 'http://localhost/api/v1/auth/sign_out';

  // GET アカウント一覧 取得
  export const fetchAccountList: string = 'http://localhost/api/v1/accounts';
  // GET アカウント 取得
  export const fetchAccount: string = 'http://localhost/api/v1/accounts';
  // POST 商品一覧 取得
  export const fetchProductList: string = 'http://localhost/api/v1/products';
  // POST 商品 取得
  export const fetchProduct: string = 'http://localhost/api/v1/products';
}

export default Api;
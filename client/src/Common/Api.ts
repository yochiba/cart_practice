namespace Api {
  // API エンドポイント
  export const endpoint: string = 'http://localhost/api/v1';

  // POST アカウント サインアップ
  export const accountSignUp: string = `${endpoint}/auth`;
  // POST アカウント サインイン
  export const accountSignIn: string = `${endpoint}/auth/sign_in`;
  // DELETE アカウント サインアウト
  export const accountSignOut: string = `${endpoint}/auth/sign_out`;

  // GET アカウント一覧 取得
  export const fetchAccountList: string = `${endpoint}/accounts'`;
  // GET アカウント 取得
  export const fetchAccount: string = `${endpoint}/accounts`;
  // POST 商品一覧 取得
  export const fetchProductList: string = `${endpoint}/products`;
  // POST 商品 取得
  export const fetchProduct: string = `${endpoint}/products`;
}

export default Api;
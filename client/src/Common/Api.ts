namespace Api {
  // POST アカウント サインアップ
  export const accountSignUp: string = 'http://localhost/api/v1/auth';
  // POST アカウント サインイン
  export const accountSignIn: string = 'http://localhost/api/v1/auth/sign_in';
  // DELETE アカウント サインアウト
  export const accountSignOut: string = 'http://localhost/api/v1/auth/sign_out';
  // POST 商品リスト
  export const productList: string = 'http://localhost/api/v1/products';
  // POST 商品詳細
  export const productDetail: string = 'http://localhost/api/v1/products';
}

export default Api;
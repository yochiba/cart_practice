import React, { useEffect } from 'react';
import { AppState } from '../stores/index';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { AccountState, accountActions } from '../stores/Account';

const Register: React.FC = () => {
  // Redux
  const accountStore: AccountState = useSelector<AppState, AccountState>(state => state.accountStore);

  useEffect(() => {
    console.log(accountStore);
    if (accountStore.accessToken === '') {
      console.log('ログインしないとあかんで〜');
    }
  }, []);

  return (
    <section className='Register'>
      <h1>商品確認＆ユーザー情報入力</h1>
      {/* 先にログイン機能を実装 */}
      {/* <form>
        <div class="preference">
          <label for="cheese">Do you like cheese?</label>
          <input type="checkbox" name="cheese" id="cheese">
        </div>
      </form> */}
    </section>
  );
}

export default Register;
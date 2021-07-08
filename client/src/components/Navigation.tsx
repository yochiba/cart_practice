import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AppState } from '../stores/index';
import { AccountState, accountActions } from '../stores/Account';
import { useSelector, useDispatch } from "react-redux";
import Api from '../Common/Api';
import Axios from 'axios';

const Navigation: React.FC = () => {
  // Redux
  const accountStore: AccountState = useSelector<AppState, AccountState>(state => state.accountStore);
  const accountDispatch = useDispatch();

  const signOut = (e: any) => {
    e.preventDefault();

    Axios.delete(`${Api.accountSignOut}?access-token=${accountStore.accessToken}&client=${accountStore.client}&uid=${accountStore.uid}`)
    .then(res => {
      // dispatch
      accountDispatch(accountActions.updateId(0));
      accountDispatch(accountActions.updateEmail(''));
      accountDispatch(accountActions.updateAccessToken(''));
      accountDispatch(accountActions.updateProvider(''));
      accountDispatch(accountActions.updateClient(''));
      accountDispatch(accountActions.updateUid(''));
      accountDispatch(accountActions.updateFirstname(''));
      accountDispatch(accountActions.updateLastname(''));
    })
    .catch(error => {
      console.log(error);
    })
  }


  if (accountStore.accessToken && accountStore.uid && accountStore.client) {
    return (
      <nav className='Navigation'>
        <Link to='/'>Home</Link>
        <h1>{accountStore.lastname} {accountStore.firstname}さん、こんにちは</h1>
        <Link to='/cart'>
          <FontAwesomeIcon className='cart-icon' icon='shopping-cart' />
        </Link>
        <button className='sign-out-btn' onClick={(e) => {signOut(e)}}>
          ログアウト
        </button>
      </nav>
    );
  } else {
    return (
      <nav className='Navigation'>
        <Link to='/'>Home</Link>
        <Link to='/sign-in'>ログイン</Link>
        <Link to='/sign-up'>新規登録</Link>
        <Link to='/cart'>
          <FontAwesomeIcon className='cart-icon' icon='shopping-cart' />
        </Link>
      </nav>
    );
  }
}

export default Navigation;
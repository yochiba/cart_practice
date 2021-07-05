import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navigation: React.FC = () => {
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

export default Navigation;
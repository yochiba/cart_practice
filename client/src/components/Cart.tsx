import React from 'react';
import { Link } from 'react-router-dom';
import { AppState } from '../stores/index';
import { CartState } from '../stores/Cart';
import { useSelector, useDispatch } from "react-redux";
import Util from '../Common/Util';

const Cart: React.FC = () => {
  // Redux
  const cartStore: CartState = useSelector<AppState, CartState>(state => state.cartStore);
  const cartDispatch = useDispatch();

  const removeFromCart = (id: number) => {
    console.log('FIXME カートから削除');
    // cartDispatch();
  }
  return (
    <div className='Cart'>
      <h1>カート</h1>
      <div className='cart-item-list'>
        {
          cartStore.cart.map((cart: Util.CartProduct) => {
            return (
              <div className='cart-item-box'>
                <h2>{cart.name}</h2>
                <h2>{cart.price}</h2>
                <h2>{cart.count}</h2>
                <button onClick={() => {removeFromCart(cart.id)}}>削除する</button>
              </div>
            );
          })
        }
      </div>
      <Link to='/register'>レジへ進む</Link>
    </div>
  );
}

export default Cart;
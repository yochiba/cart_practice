import React from 'react';
import { Link } from 'react-router-dom';
import { AppState } from '../stores/index';
import { CartState, cartActions } from '../stores/Cart';
import { useSelector, useDispatch } from "react-redux";
import Util from '../Common/Util';

const Cart: React.FC = () => {
  // Redux
  const cartStore: CartState = useSelector<AppState, CartState>(state => state.cartStore);
  const cartDispatch = useDispatch();

  // カートから削除
  const removeFromCart = (id: number) => {
    cartStore.cart.map((product: Util.CartProduct, index: number) => {
      if (product.id === id) {
        cartStore.cart.splice(index, 1);
      }
    });
    cartDispatch(cartActions.updateCart(cartStore.cart));
  }

  // 商品の個数制御
  const productCount = (id: number, count: number, stock: number) => {
    return (
      <select
        className='product-count-select'
        name='product_count'
        id={`product${id}`}
        onChange={(e) => {onChangeProductCount(e, id)}}
      >
        {productCountOption(id, count, stock)}
      </select>
    )
  }

  // 商品の個数 option
  const productCountOption = (id: number, count: number,stock: number) => {
    let optionHtmlList = [];
    for (let optionCount: number = 1; optionCount <= stock; optionCount++) {
      const selected: boolean = optionCount === count;
      const optionHtml = (
        <option
          value={optionCount}
          key={`option${id}-${optionCount}`}
          selected={selected}
        >
          {optionCount}
        </option>
      );
      optionHtmlList.push(optionHtml);
    }
    return optionHtmlList;
  }

  // 商品の個数制御(onChange)
  const onChangeProductCount = (e: any, id: number) => {
    const value: number = Number(e.target.value);
    cartStore.cart.map((product: Util.CartProduct) => {
      if (product.id === id) {
        product.count = value;
      }
    });
    cartDispatch(cartActions.updateCart(cartStore.cart));
  }

  // レジに進むリンク
  const proceedRegister = () => {
    if (cartStore.cart.length !== 0) {
      return (<Link to='/register'>レジへ進む</Link>);
    } else {
      return (<h2>カートは空です。</h2>);
    }
  }

  return (
    <div className='Cart'>
      <h1>カート</h1>
      <div className='cart-item-list'>
        {
          cartStore.cart.map((cart: Util.CartProduct) => {
            const totalPrice: number = cart.price * cart.count;
            return (
              <div className='cart-item-box'>
                <h2>{cart.name}</h2>
                <h2>小計：{totalPrice}円</h2>
                <h2>カート個数{productCount(cart.id, cart.count, cart.stock)}</h2>
                <button onClick={() => {removeFromCart(cart.id)}}>削除する</button>
              </div>
            );
          })
        }
      </div>
      {proceedRegister()}
    </div>
  );
}

export default Cart;
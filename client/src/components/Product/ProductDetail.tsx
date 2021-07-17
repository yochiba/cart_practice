import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppState } from '../../stores/index';
import { CartState, cartActions } from '../../stores/Cart';
import { useSelector, useDispatch } from "react-redux";
import Axios from 'axios';
import Api from '../../Common/Api';
import Util from '../../Common/Util';

type ProductDetailParams = {
  productId: string;
}

type DisplayProduct = {
  id: number;
  name: string;
  description: string;
  price: number;
  serial_number: string;
  stock: number;
  display_flag: boolean;
  created_at: string;
  updated_at: string;
  category_id: number;
}

const initDisplayProduct = {
  id: 0,
  name: '',
  description: '',
  price: 0,
  serial_number: '',
  stock: 0,
  display_flag: true,
  created_at: '',
  updated_at: '',
  category_id: 0,
}

const initialCartCount: number = 1;

const ProductDetail: React.FC = () => {
  // Redux
  const cartStore: CartState = useSelector<AppState, CartState>(state => state.cartStore);
  const dispatch = useDispatch();
  

  // 商品一覧のLinkのパラメータを取得
  const {productId} = useParams<ProductDetailParams>();

  // State管理
  const [displayProduct, setDisplayProduct] = useState<DisplayProduct>(initDisplayProduct);
  const [cartProduct, setCartProduct] = useState<Util.CartProduct[]>(Util.initialCartProductList);
  const [productCount, setProductCount] = useState<number>(initialCartCount);

  // productIdが更新されたタイミングで呼び出されるメソッド。
  useEffect(() => {
    Axios.get(`${Api.fetchProduct}/${productId}`)
    .then(res => {
      const response = res.data.data;

      const product = {
        id: response.id,
        name: response.attributes.name,
        description: response.attributes.description,
        price: response.attributes.price,
        serial_number: response.attributes.serial_number,
        stock: response.attributes.stock,
        display_flag: response.attributes.display_flag,
        created_at: response.attributes.created_at,
        updated_at: response.attributes.updated_at,
        category_id: response.attributes.category_id,
      }
      setDisplayProduct(product);
      setCartProduct(cartStore.cart);
    })
    .catch(error => {
      console.log(error);
    })
  }, [])

  const onChangeProductCount = (e: any) => {
    const value: number = Number(e.target.value);
    setProductCount(value);
  }

  // カート追加
  const addToCart = () => {
    if (cartProduct.some(cart => cart.id === displayProduct.id)) {
      // すでにカートに同じ商品が存在する場合
      cartProduct.map((product: Util.CartProduct) => {
        if (product.id === displayProduct.id) {
          product.count += productCount;
        }
      });
    } else {
      // 新規でカートに追加する商品
      const addingProduct: Util.CartProduct = {
        id: displayProduct.id,
        name: displayProduct.name,
        price: displayProduct.price,
        serial_number: displayProduct.serial_number,
        category_id: displayProduct.category_id,
        count: productCount,
        stock: displayProduct.stock,
      };
      cartProduct.push(addingProduct);
    }
    // Redux カート更新
    dispatch(cartActions.updateCart(cartProduct));
  }

  // 商品の個数 select
  const productCountSelect = () => {
    return (
      <select
        className='product-count-select'
        name='product_count'
        id={`product${displayProduct.id}`}
        onChange={(e) => {onChangeProductCount(e)}}
      >
        {productCountOption()}
      </select>
    )
  }

  // 商品の個数 option
  const productCountOption = () => {
    let optionHtmlList = [];
    for (let optionCount: number = 1; optionCount <= displayProduct.stock; optionCount++) {
      const optionHtml = (
        <option
          value={optionCount}
          key={`option${displayProduct.id}-${optionCount}`}
        >
          {optionCount}
        </option>
      );
      optionHtmlList.push(optionHtml);
    }
    return optionHtmlList;
  }

  return (
    <section className='Product'>
      <h1>商品詳細ページ</h1>
      <div className='product-detail-ctr'>
        <h2>{displayProduct.name}</h2>
        <h3>価格：</h3>
        <p>{displayProduct.price}円</p>
        <h3>シリアル：</h3>
        <p>{displayProduct.serial_number}</p>
        <div className='product-description'>
          <h3>この商品について</h3>
          <p>{displayProduct.description}</p>
        </div>
        <h3>個数：</h3>
        {productCountSelect()}
        <Link
          to='/cart'
          className='add-to-cart-btn'
          onClick={() => {addToCart()}}
        >
          カートに追加
        </Link>
      </div>
    </section>
  );
}

export default ProductDetail;
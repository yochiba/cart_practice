import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

type ProductDetailParams = {
  productId: string;
}

type Product = {
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

const initProduct = {
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

const ProductDetail: React.FC = () => {
  // 商品一覧のLinkのパラメータを取得
  const { productId } = useParams<ProductDetailParams>();

  // State管理
  const [product, setProduct] = useState<Product>(initProduct);
  const [productCount, setProductCount] = useState<number>(0);

  // productIdが更新されたタイミングで呼び出されるメソッド。
  useEffect(() => {
    Axios.get(`http://localhost/api/v1/products/${productId}`)
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
        setProduct(product);
      })
  }, [])

  // TODO productToCartを更新するメソッドを作成する。
  const handleProductToCart = (e: any) => {
    const value: number = Number(e.target.value);
    setProductCount(value);
  }

  // TODO カートに追加ボタンを押下時に処理が走る。
  // TODO Reduxでカートを管理
  const addToCart = () => {

  }

  return (
    <div className='Product'>
      <h1>商品詳細ページ</h1>
      <div className='product-detail-container'>
        <h2>{product.name}</h2>
        <p>価格：{product.price}円</p>
        <p>シリアル：{product.serial_number}</p>
        <select
          className='product-count-select'
          name='productCount'
          id={`product${product.id}`}
          onChange={(e) => {handleProductToCart(e)}}
        >
          <option value='1' key={`${product.id}-1`}>1</option>
          <option value='2' key={`${product.id}-2`}>2</option>
          <option value='3' key={`${product.id}-3`}>3</option>
        </select>
        <button
          className='cart-add-btn'
          onClick={() => {addToCart()}}
        >
          カートに商品を追加
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
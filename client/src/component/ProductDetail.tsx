import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

type ProductDetailParams = {
  productId: string;
}

type ProductData = {
  id: number;
  productName: string;
  price: number;
  categoryId: number;
  serialNumber: string;
  stock: number;
  createdAt: string;
  updatedAt: string;
}

const initProductData: ProductData = {
  id: 0,
  productName: '',
  price: 0,
  categoryId: 0,
  serialNumber: '',
  stock: 0,
  createdAt: '',
  updatedAt: '',
}

const PRODUCT_LIST_STUB: ProductData[] = [
  {
    id: 1,
    productName: '鉛筆 1ダース',
    price: 800,
    categoryId: 1,
    serialNumber: 'A-000001',
    stock: 100,
    createdAt: '2021-05-31 00:00:00',
    updatedAt: '2021-05-31 00:00:00',
  },
  {
    id: 2,
    productName: 'クリアファイル 100枚セット',
    price: 2800,
    categoryId: 2,
    stock: 100,
    serialNumber: 'B-000001',
    createdAt: '2021-05-31 00:00:00',
    updatedAt: '2021-05-31 00:00:00',
  },
  {
    id: 3,
    productName: 'ノート',
    price: 150,
    stock: 100,
    categoryId: 3,
    serialNumber: 'C-000001',
    createdAt: '2021-05-31 00:00:00',
    updatedAt: '2021-05-31 00:00:00',
  },
];


const ProductList: React.FC = () => {
  // 商品一覧のLinkのパラメータを取得
  const { productId } = useParams<ProductDetailParams>();

  // スタブの配列のindex指定用
  const displayIndex: number = Number(productId) - 1;

  // State管理
  const [productData, setProductData] = useState<ProductData>(initProductData);
  const [productCount, setProductCount] = useState<number>(0);

  // productIdが更新されたタイミングで呼び出されるメソッド。
  useEffect(() => {
    // FIXME 非同期通信の課題でaxiosを導入
    const productData: ProductData =  PRODUCT_LIST_STUB[displayIndex];
    // Stateにデータをセット
    setProductData(productData);    
  }, [productId]);

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
        <h2>{productData.productName}</h2>
        <p>価格：{productData.price}円</p>
        <p>シリアル：{productData.serialNumber}</p>
        <select
          className='product-count-select'
          name='productCount'
          id={`product${productData.id}`}
          onChange={(e) => {handleProductToCart(e)}}
        >
          <option value='1' key={`${productData.id}-1`}>1</option>
          <option value='2' key={`${productData.id}-2`}>2</option>
          <option value='3' key={`${productData.id}-3`}>3</option>
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

export default ProductList;
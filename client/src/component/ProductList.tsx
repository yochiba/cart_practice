import React from 'react';
import { Link } from 'react-router-dom';

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
  return (
    <div className='ProductList'>
      <h1>商品一覧</h1>
      {PRODUCT_LIST_STUB.map((product: ProductData) => {
        return (
          <div className='productBox' key={`productBox${product.id}`}>
            <Link to={`/product/${product.id}`}>
              <h2>{product.productName}</h2>
              <p>価格：{product.price}円</p>
              <p>シリアル：{product.serialNumber}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
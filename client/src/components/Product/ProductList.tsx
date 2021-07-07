import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Api from '../../Common/Api';

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

const initProducts = [
  {
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
]

const ProductList: React.FC = () => {
  // State管理
  const [products, setProducts] = useState<Product[]>(initProducts);

  useEffect(() => {
    Axios.get(Api.productList)
    .then(res => {
      const responses = res.data.data;

      let products: Product[] = []
      responses.map((response: any) => {
        const product = response.attributes;
        products.push({
          id: response.id,
          name: product.name,
          description: product.description,
          price: product.price,
          serial_number: product.serial_number,
          stock: product.stock,
          display_flag: product.display_flag,
          created_at: product.created_at,
          updated_at: product.updated_at,
          category_id: product.category_id,
        });
      })
      setProducts(products);
    })
    .catch(error => {
      console.log(error);
    })
  }, [])

  return (
    <div className='ProductList'>
      <h1>商品一覧</h1>
      {products.map((product: Product) => {
        return (
          <div className='productBox' key={`productBox${product.id}`}>
            <Link to={`/product/${product.id}`}>
              <h2>{product.name}</h2>
              <p>価格：{product.price}円</p>
              <p>シリアル：{product.serial_number}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
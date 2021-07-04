import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
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
  const {productId} = useParams<ProductDetailParams>();

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

  const onChangeProductCount = (e: any) => {
    const value: number = Number(e.target.value);
    setProductCount(value);
}

  // TODO カートに追加ボタンを押下時に処理が走る。
  // TODO Reduxでカートを管理
  const addProductToCart = (e: any) => {
}

  // 商品の個数 select
  const productCountSelect = (stock: number) => {
    return (
      <select
        className='product-count-select'
        name='product_count'
        id={`product${product.id}`}
        onChange={(e) => {onChangeProductCount(e)}}
      >
        {productCountOption(stock)}
      </select>
    )
}

  // 商品の個数 option
  const productCountOption = (stock: number) => {
    for (let product_count: number = 1; product_count <= stock; product_count++) {
      return (
        <option
          value={product_count}
          key={`option${product.id}-${product_count}`}
        >
          {product_count}
        </option>
      );
  }
}

  return (
    <section className='Product'>
      <h1>商品詳細ページ</h1>
      <div className='product-detail-ctr'>
        <h2>{product.name}</h2>
        <h3>価格：</h3>
        <p>{product.price}円</p>
        <h3>シリアル：</h3>
        <p>{product.serial_number}</p>
        <div className='product-description'>
          <h3>この商品について</h3>
          <p>{product.description}</p>
        </div>
        <h3>個数：</h3>
        {productCountSelect(product.stock)}
        <button
          className='add-to-cart-btn'
          onClick={(e) => {addProductToCart(e)}}
        >
          カートに追加
        </button>
      </div>
    </section>
  );
}

export default ProductDetail;
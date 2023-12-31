import React, { useState, useContext, useEffect } from 'react';
import { Product } from './product';
import "./shop.css";
import { ShopContext } from '../../context/shop-context';


export const Shop = ({ isLoading, updateLoading }) => {

  const { productList } = useContext(ShopContext)

  const [products, setProducts] = useState(null)


  useEffect(() => {
    if (productList !== null) {
      setTimeout(() => {
        setProducts(productList)
      }, 500);

      setTimeout(() => {
        updateLoading(false)
      }, 1000);
    }
  }, [productList])



  return (
    isLoading ?
      (<div className='loading-container'><div className='loading'></div></div>)
      :
      (<div className='shop'>
        <div className='shopTitle'>
          <span> Art Prints </span>
        </div>
        <div className='products'>

          {products?.map((product) => (
            <Product data={product} key={product.id} />
          ))}
        </div>
      </div>)

  )
}

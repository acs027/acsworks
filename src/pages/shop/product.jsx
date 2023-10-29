import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from "../../context/shop-context"
import { Link } from 'react-router-dom'
import { ShoppingCart } from "phosphor-react";


export const Product = (props) => {
    const {id, productName, price, productImageURL} = props.data
    const { addToCart, cartItems } = useContext(ShopContext)

    const cartItemAmount = cartItems[id]

    const [isImgLoaded, setIsImgLoaded] = useState(false)

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
      setIsImgLoaded(true)
    }, [loaded])
    
    return (
    <div className='product'>
        <div className='imginfo' >
        <Link to={"/"+id} >
        { 
        !isImgLoaded ? <div className='img-placeholder'></div>
        :
        <img src={productImageURL} alt={productName}
        onLoad={() => (setLoaded(true))} />
        }
        </Link>
        </div>
      
      <div className='product-bottom-container'>
      <div className='description'>
          <p className='productName'>
              {productName}
          </p>
          <p>
              ${price}
          </p>
      </div>
      <div className='prod-cart'>
      <button className='addToCartBttn' onClick={() => addToCart(id)}>
            <div className='cart-amount'><ShoppingCart size={32} /> <div>{cartItemAmount > 0 && <> ({cartItemAmount}) </>} </div>   </div>
           </button>
           </div>
           </div>
  </div>
  )
}

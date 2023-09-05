import React, { useContext, useState } from 'react'
import { ShopContext } from "../../context/shop-context"
import { Link } from 'react-router-dom'
import { ShoppingCart } from "phosphor-react";


export const Product = (props) => {
    const {id, productName, productOwner, dimensions, price, productImageURL} = props.data
    const { addToCart, cartItems } = useContext(ShopContext)
    const [ showInfo, setShowInfo ] = useState(false)

    const cartItemAmount = cartItems[id]
    
    // const toggleInfo = () => {
    //     setShowInfo(!showInfo)
    // }
    const toggleInfo = () => {
        setShowInfo(!showInfo)
    }

    return (
    <div className='product'>
        <div className='imginfo' >
        {
            showInfo && <div className='info'>{productOwner} {dimensions}</div>
        }
        <Link to={"/"+id} >
        <img src={productImageURL} alt={productName} />
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

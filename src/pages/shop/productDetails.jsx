import React, {useContext, useEffect} from 'react'
import { ShopContext } from '../../context/shop-context'
import './productDetails.css'

export const ProductDetails = (props) => {
  const {id, productName, productOwner, dimensions, price, productImageURL} = props.data
  const { addToCart, cartItems } = useContext(ShopContext)

  const cartItemAmount = cartItems[id]

  useEffect(() => {
    window.scrollTo({top:0,left:0})
  }, [])
  

  return (
    <div className='productDetails-container'>
      <img src={productImageURL} />
      <div className='details-container'>
      <div className='prodName'>{productName}</div>
      <div className='price'>${price}</div>
      <div className='dimensions'>Dimensions : {dimensions}cm</div>
      <div className='owner'>Created by {productOwner}</div>
      <button className='addToCartBttnInDet' onClick={() => addToCart(id)}>
           Add to cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
           </button>
           </div>
    </div>
  )
}

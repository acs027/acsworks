import React, { useContext } from 'react'
import { ShopContext } from "../../context/shop-context"
import { CartItem } from './cart-item'
import "./cart.css"

import { useNavigate } from 'react-router-dom'



export const Cart = () => {
    const { productList,cartItems, getTotalCartAmount } = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()

    const navigate = useNavigate()
    
  return (
    <div className='cart'>
        
        {totalAmount > 0 ?
        
        <div className='checkout'>
            <div>
            <h1> Your cart items </h1>
        </div>
        <div className='cartItems'>
            {productList?.map((product) => {
                if (cartItems[product.id] !== 0) {
                    return <CartItem data={product} />
                }
            })}
            <p>
                Subtotal: ${totalAmount}
            </p>
            <div className='checkout-bttns-container'>
            <button onClick={() => navigate("/")} >
                Continue Shopping
            </button>
            <button>
                Checkout
            </button>
            </div>
        </div>
        </div>      
        : <div className='emptyCart-container'> 
        <h1> Your cart is empty </h1>
        </div> 
        
        }
    </div>
  )
}

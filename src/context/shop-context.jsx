import React, { createContext, useState, useEffect } from 'react'
import { ref as refdb, child, get } from 'firebase/database'
import { database } from '../firebase';



export const ShopContext = createContext(null)


const fetchData = () => {
    const tempList = []
    const cart = {}
    const fetchProducts = refdb(database, '/')
    get(child(fetchProducts, "/")).then((snapshot) => {
    if (snapshot.exists()) {
        snapshot.forEach(snap => {
        const item = snap.val()
        tempList.push(item)
        cart[item.id] = 0
        })
    } else {
        console.log("No data available");
    }
    }).catch((error) => {
    console.error(error);
    });
    return [tempList, cart]
}



export const ShopContextProvider = (props) => {
    const [productList, setProductList] = useState(null)

    const [cartItems, setCartItems] = useState(null)

    

    
    const getTotalCartAmount = () => {
        let totalAmount = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = productList.find((product) => product.id === item)
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
    }

    const updateProductList = (prd) => {
        setProductList(prd)
    }

   


    const contextValue = { 
        cartItems, 
        addToCart, 
        removeFromCart, 
        updateCartItemCount,
        getTotalCartAmount,
        productList,
        updateProductList
    }

    useEffect(() => {
      const datas = fetchData()
      setProductList(datas[0])
      setCartItems(datas[1])
    }, [])
    

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

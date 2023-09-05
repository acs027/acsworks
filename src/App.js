import './App.css';
import React, { useState, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/navbar";
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { HamburgerMenu } from './components/hamburgerMenu';
import { ProductDetails } from './pages/shop/productDetails';
import { ShopContext } from './context/shop-context';
import { Footer } from './components/footer';

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const [isLoading, setLoading] = useState(true)

  const {productList} = useContext(ShopContext)

  const updateLoading = (cond) => {
    setLoading(cond)
  }
  const toggleMenu = () => {
      setIsOpen(!isOpen)
  }

  return (
    <div className="App">
        <Router>
          <Navbar toggleMenu={toggleMenu} />
          <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
          <Routes>
            <Route path="/" element={<Shop isLoading={isLoading} updateLoading={updateLoading} />} />
            <Route path="/cart" element={<Cart />} />

            { productList !== null && (
              productList.map((product) => (
                <Route path={"/"+product.id} element={<ProductDetails data={product} />} />
              ))
            )}
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;

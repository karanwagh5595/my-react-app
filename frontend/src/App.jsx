import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router";

import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Product_Detail from "./pages/Product_Detail";
import All_Product from "./components/All_Product";
import ProductByCategory from "./pages/ProductByCategory";
import Search_Product from "./pages/Search_Product";
import TrendingSlider from "./components/Trending_Slider";
import Featured_products from './pages/Featured_products';
import Bigdealpage from './pages/Bigdealpage';
import { Bestcollection } from './pages/Bestcollection';
import Footer from './components/footer';
import Login from './pages/Login';
import FoodPage from './pages/FoodPage';
import CartPage from './pages/CartPage';
import PaymentPage from './pages/PaymentPage';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<All_Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/Featured_products" element={<Featured_products />} />
      <Route path="/Bigdealpage" element={<Bigdealpage />} />
      <Route path="/Bestcollection" element={<Bestcollection />} />
      <Route path="/product/:id" element={<Product_Detail />} />
      <Route path="/product/category/:cat" element={<ProductByCategory />} />
      <Route path="/product/search/:term" element={<Search_Product />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/FoodPage" element={<FoodPage />} />
      <Route path="/cartnew" element={<CartPage />} />
      <Route path="/PaymentPage" element={<PaymentPage />} />
      <Route path="/HomePage" element={<HomePage />} />
      

      
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
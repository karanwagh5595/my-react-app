import React, { useEffect, useState } from 'react'
import { FaAmazon, FaShoppingCart, FaSearch,FaRegUser  } from "react-icons/fa";

import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // 👇 जब भी Navbar लोड हो, localStorage से cart count read करो
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(cartItems.length);
    console.log("🧾 Navbar loaded - Cart count:", cartItems.length);
  }, []);

  return (
    <>
      <header>
        {/* upper nav bar  */}
        <div className='top-bar'>
          <div className="container">
            <div className="top-left-and-right">
              <div className="top-bar-left">
                <div className="header-message">Welcome to our online store!</div>
              </div>
              <div className="top-bar-right">
                <div className="header-language">
                  <div className="dropdown">

                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">

                      English (USD)
                    </button>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to={"/"}>Action</Link></li>
                      <li><Link className="dropdown-item" to={"/"}>Another action</Link></li>
                      <li><Link className="dropdown-item" to={"/"}>Something else here</Link></li>
                    </ul>
                  </div>
                </div>
                <ul className="header-user-links">
                  <li>
                    <Link to={"/"} className='login-add'>Login or Register</Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
        {/* upper nav bar  */}

        {/* medile nav bar */}
        <div className="medial_nav_bar">
          <div className="container">
            <div className="main-header">
              <div className="row">
                <div className="col-lg-3">
                  <div className="logo">
                    <Link to={"/"}>
                      <img src={logo} alt="My Description" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-7">
                  <form className="d-flex mx-auto search-container">
                    <input
                      className="form-control search-input"
                      placeholder="Search products..."
                    />
                    <button className="btn btn-warning search-button" type="submit">
                      <FaSearch />
                    </button>
                  </form>
                </div>
                <div className="col-lg-2">
                  
                <Link to="/cartnew" className="btn position-relative">
          <span className="badge bg-danger position-absolute top-0 start-100 translate-middle rounded-pill">
            {cartCount}
          </span>
          <FaShoppingCart className="fs-4" />
        </Link>
                  <Link to="/Login" className="btn  position-relative ">
                    <FaRegUser className="fs-4" />
                  </Link>
                  <Link to="/PaymentPage" className="btn btn-success">
  Go to Payment
</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* medile nav bar */}

        {/* nav bar main */}
        <nav className="navbar bg-white-bg navbar-expand-lg navbar-dark px-4 py-2 sticky-top shadow">

          <div className="container-fluid">
            {/* Left Section - Logo */}

            

            {/* Navbar Content */}
            {/* Search Bar */}



            {/* Categories */}
            <ul className="navbar-nav mx-auto d-flex gap-3">
              {["Mobiles", "Laptops", "Tablets", "Watches"].map((category) => (
                <li key={category} className="nav-item">
                  <Link
                    to={`/product/category/${category}`}
                    className="nav-link category-link"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Cart Button */}


          </div>
        </nav>

      </header>


    </>


  )
}

export default Navbar
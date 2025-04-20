
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

 
const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      console.log("📦 Cart loaded from localStorage:", parsedCart);
      setCartItems(parsedCart);

      const total = parsedCart.reduce((sum, item) => sum + Number(item.price), 0);
      setTotalPrice(total);
      console.log("💰 Initial total price:", total);
      
    }
  }, []);
  



   // 👉 Remove a specific item
  const handleRemoveFromCart = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    console.log("🗑️ Removing item at index:", indexToRemove);
    console.log("🧾 Updated cart after removal:", updatedCart);

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);

    const newTotal = updatedCart.reduce((sum, item) => sum + Number(item.price), 0);
    setTotalPrice(newTotal);
    console.log("💸 Updated total price:", newTotal);

    alert("🗑️ Item removed from cart!");
  };

  const handleClearCart = () => {
    console.log("🧹 Clearing entire cart...");
    localStorage.removeItem('cart');
    setCartItems([]);
    alert("🧹 Cart cleared successfully!");

  }

  const handleCheckout = () => {
    console.log("🧾 Proceeding to checkout...");
    console.log("🛒 Final Cart Items:", cartItems);
    console.log("💸 Total Amount:", totalPrice);
    alert("✅ Checkout Done! ");
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">🛍️ Your Cart Items</h2>

      {cartItems.length > 0 && (
        <>
          <div className="text-center mb-3">
            <h4 className="text-success">
              💰 Total Price: ₹{totalPrice}
            </h4>
          </div>
         
        </>
      )}

      {cartItems.length > 0 && (
        <div className="text-center mb-4">
          <button className="btn btn-danger" onClick={handleClearCart}>
            🧹 Clear Cart
          </button>
        </div>
      )}

        <Link to={"/PaymentPage"} className="btn btn-success" onClick={handleCheckout}>
              ✅ Checkout
            </Link>

      {cartItems.length === 0 ? (
        <p className="text-center">😕 Your cart is empty</p>
      ) : (
        <div className="row">
          {cartItems.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow">
                <img src={item.image} alt={item.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text text-success">₹{item.price}</p>
                  <button className="btn btn-primary" onClick={() => handleRemoveFromCart(index)}>Remove Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



const PaymentPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    try {
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartItems(storedCart);
      console.log("📦 Cart loaded on Payment Page:", storedCart);

      // Calculate total price
      const total = storedCart.reduce((sum, item) => {
        if (item && item.price) {
          return sum + item.price;
        }
        return sum;
      }, 0);
      setTotalPrice(total);
      console.log("💰 Total price calculated:", total);
    } catch (error) {
      console.error("❌ Error loading cart data:", error);
    }
  }, []);

  const handleClearCart = () => {
    localStorage.removeItem('cart');
    setCartItems([]);
    setTotalPrice(0);
    console.log("🧹 Cart cleared successfully!");
  };

  const handleCheckout = () => {
    alert("✅ Order placed successfully!");
    console.log("🧾 Payment completed. Order placed!");
    handleClearCart();
    
    navigate('/');
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">💳 Payment Page</h2>

      {cartItems.length === 0 ? (
        <p className="text-center">🛒 Your cart is empty.</p>
      ) : (
        <>
          <div className="row">
            {cartItems.map((item, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card shadow">
                  <img src={item.image} alt={item.name} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text text-success">Price: ₹{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <h4>🧾 Total: ₹{totalPrice}</h4>
            <button className="btn btn-success m-2" onClick={handleCheckout}>
              ✅ Checkout
            </button>
            <button className="btn btn-danger m-2" onClick={handleClearCart}>
              🧹 Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PaymentPage;

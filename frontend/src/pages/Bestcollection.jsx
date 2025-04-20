import React, { useEffect, useState } from 'react'
import axios from 'axios';


export const Bestcollection = () => {
  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);


  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(existingCart.length);
  }, []);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        console.log("📡 Fetching food data from backend...");
        const response = await axios.get('http://192.168.18.151:5000/api/foods');
        console.log("✅ Data received:", response.data);
        setFoods(response.data);

      } catch (error) {
        console.log("❌ Error fetching food data:", error);
      }
    }
    fetchFoods();
  }, [])

 // ✅📌 YAHI PE ye function paste karo
 const handleAddToCart = (foodItem) => {
  console.log("🛒 Trying to add to cart:", foodItem);
  
  const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
  const updatedCart = [...existingCart, foodItem];
  
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  setCart(updatedCart);
  setCartCount(updatedCart.length); // ✅ Ye line important hai

  console.log("✅ Cart updated in localStorage:", updatedCart);
  alert("🛒 Item added to cart!");
};



  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">🍽️ Our Best Food Collection</h2>
      <div className="row">
        {foods.map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src={item.image} alt={item.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text text-success">Price: ₹{item.price}</p>
                <button className="btn btn-primary" onClick={() => handleAddToCart(item)}>Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

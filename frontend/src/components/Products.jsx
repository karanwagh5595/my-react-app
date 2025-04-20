import React from 'react'
import { Link } from 'react-router';
import ShopByCategory from './ShopByCategory';

const Products = ({ items }) => {
  return (
    <>
    <ShopByCategory />
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          {items.map((product) => (
            <div className="col-lg-4 col-md-6 my-3 d-flex justify-content-center" key={product.id} >
              <div className="card product-card" style={{ width: '18rem' }}>
                  <Link to={`/product/${product.id}`} className="image-container">
                      <img src={product.imgSrc} className="card-img-top" alt={product.title} />
                  </Link>
                  <div className="card-body text-center">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="product-price">{product.price} ₹</p>
                  <button>🛒 Add To Cart</button>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>

  )
};

export default Products
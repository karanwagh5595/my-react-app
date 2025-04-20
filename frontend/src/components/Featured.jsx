import React, { useState } from 'react'
import { Link } from 'react-router'
import featuredProducts from '../context/Feat';
import { useNavigate } from 'react-router-dom';



const Featured = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [clickedProductId, setClickedProductId] = useState(null);

  const handleProductClickone = (product) => {
    navigate('/Featured_products', { state: { selectedProduct: product } });
  };


  return (
    <>
      <section className='product-in-stock-wrapp'>
        <div className="container">
          <div className="row">
            <h3 className="custommenu-title-blog white">
              Featured Products
            </h3>
          </div>

          <div className="gnash-product style3">
            <ul className='row list-products auto-clear equal-container product-grid'>
              {featuredProducts.map((item) => (
                <li
                  key={item.id}
                  className='product-item col-lg-4 col-md-6 col-sm-6 col-xs-6 col-ts-12 style-3'
                >
                  <div className="product-inner equal-element" onClick={() => handleProductClickone(item)} style={{ cursor: 'pointer', height: '142px' }} >
                    <div className="product-thumb">
                      <div className="thumb-inner">
                        <Link to={"/"}>
                          <img src={item.image} alt={item.name} width="150" />
                        </Link>
                      </div>
                      <div className="product-info">
                        <h5 className="product-name product_title">{item.name}</h5>
                        <div class="price">
                          <span>Price: ${item.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Featured
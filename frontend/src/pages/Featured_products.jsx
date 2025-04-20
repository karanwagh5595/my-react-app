import React, { useState } from 'react';
import featuredProducts from '../context/Feat';
import { useLocation } from 'react-router-dom';

const Featured_products = () => {

  const location = useLocation();
  const selectedProduct = location.state?.selectedProduct;

  if (!selectedProduct) {
    return <p>No product selected.</p>;
  }

  const relatedProducts = featuredProducts.filter(
    (item) =>
      item.category === selectedProduct.category &&
      item.id !== selectedProduct.id
  );

  return (
    <>
    <section className='feature_section_data'>
    <div className="container">
      <div className="row">
      <h2 className="text-center Related-pd-30">
      <img src={selectedProduct.image}  width="150" />
        {selectedProduct.name}
      </h2>
      </div>
      
<div className="row">
Releated product
</div>
      <div className="row">
       
        {relatedProducts.length > 0 ? (
          relatedProducts.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 col-sm-6">
              <div className="product-card">
                <img src={item.image}  width="150" />
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No related products found.</p>
        )}
      </div>
    </div>
    </section>
    </>
   
  );
};

export default Featured_products;

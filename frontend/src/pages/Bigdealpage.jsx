import React from 'react'
import { photo } from '../context/photosdata';

const Bigdealpage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Big Deal Photos</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {photo.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
            <img src={item.images} alt={item.title} style={{ width: '100%' }} />
            <h4 style={{ fontSize: '14px', marginTop: '10px' }}>{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bigdealpage
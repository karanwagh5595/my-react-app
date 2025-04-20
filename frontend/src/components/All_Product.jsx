import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import Products from "./Products";
import VideoPlayer from "./VideoPlayer";
import Big_sale from './Big_sale';
import Celebrate from './Celebrate';
import Featured from './Featured';
import Big_deal from './Big_deal';

const All_Product = () => {
  const { products } = useContext(DataContext);
  
  return (
    <>
    <VideoPlayer src="https://www.apple.com/105/media/ww/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome3/large.mp4" />
    <Big_sale />
    <Products items={products} />
    <Celebrate />
    <Featured />
    <Big_deal />
    </>
    
    
  )
};

export default All_Product
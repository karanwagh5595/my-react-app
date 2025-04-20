import React from 'react'
import './Big_sale.css';
import { Link } from 'react-router';

const Big_sale = () => {
  return (
    <>
    <div className="banner-wrapp rows-space-35">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className="banner">
                        <div className="item-banner style12">
                            <div className="inner">
                                <div className="banner-content">
                                <h3 className="title">Best Seller</h3>
                                <div className="description">
                                            Check out our your <br/> organic collection now!
                                        </div>
                                        <Link to={"/"} className='button btn-shop-now'>Shop now
                                        </Link>
                                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="banner">
                        <div className="item-banner style12">
                            <div className="inner">
                                <div className="banner-content">
                                <h4 class="gnash-subtitle">End this weekend</h4>
                                <h3 className="title">Best Seller</h3>
                                <div className="description">
                                Big Sale  <br/> 75% Off
                                        </div>
                                        <div class="code">
                                            Use promo Code:
                                            <span class="nummer-code">GNASH</span>
                                        </div>
                                        <Link to={"/"} className='button btn-shop-now'>Shop now
                                        </Link>
                                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="banner">
                        <div className="item-banner style12 type2">
                            <div className="inner">
                                <div className="banner-content">
                                
                                <h3 className="title">Best Seller</h3>
                                <div className="description">
                                            Check out our your <br/> organic collection now!
                                        </div>
                                        <Link to={"/"} className='button btn-shop-now'>Shop now
                                        </Link>
                                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Big_sale
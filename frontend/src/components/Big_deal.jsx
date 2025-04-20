import React from 'react'
import './Big_deal.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Big_deal = () => {
const navigate = useNavigate();
const handlebigdeal = () => {
    const bigdeals = {
        name: "Jewelry Collection",
        category: "Jewelry",
        id: 999,
        };  

    navigate('/Bigdealpage', { state: { selectedProduct: bigdeals } });
  };

  const handlebestcollection = () => {
    const bestdeal = {
        name: "Jewelry Collection",
        category: "Jewelry",
        id: 999,
        };  

    navigate('/Bestcollection', { state: { selectedProduct: bestdeal } });
  };

 





    return (
        <>
            <section className='banner-wrapp rows-space-30'>
                <div className="container">
                    <div className="row">
                        <h2 className='text-center big-del-font'>Big Deal Of The Day</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-12">
                            <div className="banner" onClick={() => handlebigdeal()} style={{ cursor: 'pointer'}}>
                                <div className="item-banner style10">
                                    <div className="inner">
                                        <div className="banner-content">
                                        <h4 className="gnash-subtitle">Jewelry Collection!</h4>
                                        <h3 className="title">Big Deal <br /> 
                                            Of The Day</h3>
                                            <div className="description">
                                            We’ve been waiting for you!
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-12">
                            <div className="banner" onClick={() => handlebestcollection()} style={{ cursor: 'pointer'}}>
                                <div className="item-banner style11">
                                    <div className="inner">
                                        <div className="banner-content">
                                        <h4 class="gnash-subtitle">Let’s us make your style!</h4>
                                        <h3 class="title">Best Collection </h3>
                                        <div class="description1">
                                            A complete shopping guide on what <br/> how to wear it!
                                        </div>
                                        <Link class="button btn-shopping-us" to={"/"}>Shop now</Link>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Big_deal
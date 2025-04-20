import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <>
    <div className="footer style7">
        <div className="container">
            <div className="container-wapper">
                <div className="row">
                <div className="box-footer col-xs-12 col-sm-4 col-md-4 col-lg-4">
                    <div className="gnash-custommenu default">
                        <h2 className="widgettitle">Quick Menu</h2>
                        <ul className="menu">
                            <li className="menu-item">
                               New arrivals
                            </li>
                            <li className="menu-item">
                                Life style
                            </li>
                            <li className="menu-item">
                                Pumpkin
                            </li>
                            <li className="menu-item">
                                Leafy green
                            </li>
                            <li className="menu-item">
                                Soybeans
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="box-footer col-xs-12 col-sm-4 col-md-4 col-lg-4 hidden-xs">
                    <div className="gnash-newsletter style1">
                        <div className="newsletter-head">
                            <h3 className="title">Newsletter</h3>
                        </div>
                        <div className="newsletter-form-wrap">
                            <div className="list">
                                Sign up for our free video course and <br /> urban garden inspiration
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="box-footer col-xs-12 col-sm-4 col-md-4 col-lg-4">
                    <div className="gnash-custommenu default">
                        <h2 className="widgettitle">Information</h2>
                        <ul className="menu">
                            <li className="menu-item">
                               FAQs
                            </li>
                            <li className="menu-item">
                                Track Order
                            </li>
                            <li className="menu-item">
                                Delivery
                            </li>
                            <li className="menu-item">
                                Contact Us
                            </li>
                            <li className="menu-item">
                                Return
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
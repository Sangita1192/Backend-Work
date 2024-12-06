import React from 'react';
import { MdOutlineLocalShipping } from "react-icons/md";
import { GrReturn } from "react-icons/gr";
import club from "./../Images/franck_club.png";
import { LiaCcApplePay, LiaLinkedin } from "react-icons/lia";
import icon from './../Images/fotterimg1.png';
import icon1 from './../Images/footerimg2.png';
import { CiInstagram, CiMail } from "react-icons/ci";
import { RiFacebookFill } from 'react-icons/ri';
import { FiTwitter } from 'react-icons/fi';
import { FaPinterest } from 'react-icons/fa';

function Footer() {
  return (
    <>
        <div className='container-fluid bg-black border border-1 border-danger'>
            <div className="container border border-1 border-danger py-lg-5 py-md-3 py-2">
                <div className='row text-white'>
                    <div className="col text-center fs-normal border border-1 border-danger">
                        <h3> <MdOutlineLocalShipping/> </h3>   
                        <h5>Free Shipping</h5>
                        <h6>On order above $99</h6>
                    </div>
                    <div className="col text-center fs-normal border border-1 border-danger">
                        <h3> <GrReturn/> </h3>   
                        <h5>Free Shipping</h5>
                        <h6>On order above $99</h6>
                    </div>
                    <div className="col d-flex flex-column justify-content-center  align-items-center fs-normal border border-1 border-danger">
                        <img src={club} style={{width:"24px", height:"24px"}} alt="" />   
                        <h5 className='mt-2'>Free Shipping</h5>
                        <h6>On order above $99</h6>
                    </div>
                    <div className="col text-center fs-normal border border-1 border-danger">
                        <h3> <LiaCcApplePay/> </h3>  
                        <h5>Free Shipping</h5>
                        <h6>On order above $99</h6>
                    </div>

                </div>
            </div>
            <div className="row mt-5 justify-content-between flex-column-reverse flex-xl-row  gap-3 gap-xl-0 border border-1 border-danger footer">
                <div className="col-12 col-xl-2 text-white border border-1 border-danger text-xl-start text-center">
                    <img src={icon} style={{width:'80px', height:'90px'}} className='py-2' alt="" />
                    <h4 className="d-flex my-3 justify-content-center gap-2"> <CiInstagram/> <RiFacebookFill/> <FiTwitter/> <FaPinterest/>  <CiMail/> <LiaLinkedin/> </h4>
                    <img src={icon1} className='my-3' alt="" />
                </div>
                <div className=" col-12 col-xl-2 text-white border border-1 border-danger">
                    <ul className='list-unstyled'>
                        <li className='mb-3 fs-5'>Our Story</li>
                        <li>Who we are</li>
                        <li>Sustainable practices</li>
                        <li>Design Ideology</li>
                        <li>Fabrics</li>
                        <li>Circular denim™</li>
                        <li>Partners and factories</li>

                    </ul>
                </div>
                <div className="col-12 col-xl-2 text-white border border-1 border-danger">
                    <ul className='list-unstyled'>
                        <li className='mb-3 fs-5'>Discover</li>
                        <li>Gift card's</li>
                        <li>Frank's Club</li>
                        <li>Give $15, Get $15</li>
                        <li>Affiliate</li>
                        <li>Blog</li>
                        <li>Work with us</li>
                        <li>Our stores</li>
                    </ul>
                </div>
                <div className="col-12 col-xl-2 text-white border border-1 border-danger">
                    <p className='mb-3 fs-5' >Customer Care</p>
                    <ul className='list-unstyled'>
                        
                        <li>Shipping Information</li>
                        <li>Returns & Exchanges</li>
                        <li>Coupon Codes</li>
                        <li>F.A.Q.</li>
                        <li>Terms & Conditions</li>
                        <li>Refund Policy</li>
                        <li>Privacy policy</li>
                        <li>Accessibility Statement</li>
                        <li>Customer Data Requests</li>

                    </ul>
                </div>
                <div className="col-12 col-xl-4 text-white text-xl-start text-center">
                    <h4>Stay in touch</h4>
                    <p>Join our newsletter and stay in the know about new collections, outfit inspiration, sales, and more</p>
                    <p> <input type="email" placeholder='Email' className="text-white w-75 px-1 py-2 bg-transparent border" /> </p>
                    <p> <input type="text" placeholder='First Name' className="text-white w-75 px-1 py-2 bg-transparent border" /> </p>
                    <div className="d-flex justify-content-xl-start justify-content-center gap-3">
                        I shop for 
                        <input type="radio" /> Women 
                        <input type="radio" /> Men
                        <input type="radio" /> All
                    </div>
                    <button className='text-white w-75 bg-transparent px-1 py-2 bg-transparent border'>Subscribe</button>
                </div>
            </div>
            <div className='container mb-2 text-white '>
                © Frank And Oak 2024 , All Rights Reserved.
            </div>

        </div>

    </>
  )
}

export default Footer
import React from 'react';
import './../App.css';
import { MdOutlineLocalShipping } from "react-icons/md";
import { LiaCcApplePay} from "react-icons/lia";
import { GrReturn } from "react-icons/gr";
import club from "./../Images/franck_club.png";

function Banner() {
  return (
    <>
        <div className='container-fluid position-relative d-flex justify-content-center align-items-center p-0'>
            <video className="" aria-label="Promotional video" autoPlay loop preload="auto" playsInline style={{height: '100%', width:"100%"}}>
            <source src="https://cdn.shopify.com/videos/c/o/v/c6710b4309ca491f8f1351fdb8936d01.mp4" type="video/mp4" />
            </video> 
            <div className='w-50 text-center position-absolute banner'>
              <h1> The Fall Sale <br/> 25% off everything </h1>
              <div className='d-flex justify-content-center'>
                <button className="m-2 fs-5 p-2 text-white border border-1 border-white bg-transparent">Women </button>
                <button className="m-2 fs-5 p-2 text-white border border-1 border-white bg-transparent">Men </button>
              </div> 
            </div>
            <div className="w-100 bg-black text-white position-absolute start-0 bottom-0">
              <div className='row justify-content-center pt-2'>
                <p className='col-2'> <MdOutlineLocalShipping/>  Free shipping over $99</p>
                <p className='col-2'> <GrReturn/> Free returns</p>
                <p className='col-2'> <img src={club} style={{width:"20px", height: "20px"}} alt="" /> Earn points</p>
                <p className='col-2'> <LiaCcApplePay/> Buy Now, pay later</p>
              </div>
              
            </div>
            
        </div>
    </>
  )
}

export default Banner
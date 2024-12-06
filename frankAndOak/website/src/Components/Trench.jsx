import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import trench1 from './../Images/trench1.png';
import trench11 from './../Images/trenchsmall1.webp';
import trench12 from './../Images/trenchsmall2.webp';
import trench13 from './../Images/trenchsmall3.webp';
import trench2 from './../Images/trench2.webp';
import trench21 from './../Images/trench2small1.webp';
import trench22 from './../Images/trench2small2.webp';
import trench23 from './../Images/trench2small3.webp';
import trench24 from './../Images/trench2small4.webp';


function Trench() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
    };
    return (
        <>
            <div className="container-fluid bg-secondary-subtle py-lg-5 py-2 py-md-4 ">
                <div className="row align-items-center justify-content-between mt-md-3 mt-2 trench">
                    <div className="col-12 col-md-6 overflow-hidden text-center">
                        <img src={trench1} className='trench-img' alt="" />
                    </div>
                    <div className="col-12 col-md-5">
                        <h1>The Trench</h1>
                        <p className="fs-5 text-secondary">Transition in style with our interpretation of this classic.</p>
                        <div className="row w-75 d-flex my-lg-4 my-md-3 my-2">
                            <Slider {...settings}>
                                <img src={trench11} className="col" alt="" />
                                <img src={trench12} className="col" alt="" />
                                <img src={trench13} className="col" alt="" />
                            </Slider>

                        </div>
                        <p className='fs-5 text-decoration-underline' role="button"> Shop Now</p>
                    </div>

                </div>
                <div className="row align-items-center justify-content-between mt-lg-5 mt-md-3 mt-2 trench">
                    
                    <div className="col-12 col-md-5 d-flex flex-column align-items-center">
                        <h1>The Trench</h1>
                        <p className="fs-5 text-secondary">Transition in style with our interpretation of this classic.</p>
                        <div className="row w-75 d-flex my-lg-4 my-md-3 my-2">
                            <Slider {...settings}>
                                <img src={trench21} className="col" alt="" />
                                <img src={trench22} className="col" alt="" />
                                <img src={trench23} className=" col" alt="" />
                            </Slider>

                        </div>
                        <p className='fs-5 text-decoration-underline' role="button"> Shop Now</p>
                    </div>
                    <div className="col-12 col-md-6 overflow-hidden">
                        <img src={trench2} className='trench-img' alt="" />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Trench
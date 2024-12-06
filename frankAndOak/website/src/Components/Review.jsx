import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import review1 from './../Images/revieww1.webp';
import review2 from './../Images/revieww2.webp';
import review3 from './../Images/revieww3.webp';
import review4 from './../Images/review4.webp';


function Review() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2.3,
        slidesToScroll: 2
    };
    return (
        <>
            <div className="container-fluid border border-1 border-danger mt-lg-5 mt-md-3 mt-2 bg-secondary-subtle">
                <h2 className='text-center py-lg-5 py-3'>What others are Saying</h2>
                <div className="row  justify-content-evenly border border-1 border-danger my-2 px-2">
                    <Slider {...settings}>
                        <div className="col-6 justify-content-center align-items-center border border-1 border-success">
                            <div className="row">
                                <div className="col-5 bg-white border border-1 border-danger">
                                    <h5> ***** </h5>
                                    <p className='fs-5 fw-semibold'> The quality of the material for this tee makes the difference between a cheap looking tee and this one which looks polished.I received many compliments while wearing it.</p>
                                    <p fs-5>Sarah D.</p>
                                    <p className='text-decoration-underline fs-5 fw-semibold' role="button">Shop Now</p>
                                </div>
                                <div className="col-5">
                                    <img src={review1} alt="" className='w-100 h-100' />
                                </div>
                            </div>

                        </div>
                        <div className="col-6 d-flex justify-content-center align-items-center border border-1 border-success">
                            <div className="row">
                                <div className="col-5 bg-white border border-1 border-danger">
                                <h5> ***** </h5>
                                    <p className='fs-5 fw-semibold'> The quality of the material for this tee makes the difference between a cheap looking tee and this one which looks polished.I received many compliments while wearing it.</p>
                                    <p fs-5>Sarah D.</p>
                                    <p className='text-decoration-underline fs-5 fw-semibold' role="button">Shop Now</p>
                                </div>
                                <div className="col-5">
                                    <img src={review2} alt="" className='w-100 h-100' />
                                </div>
                            </div>
                        </div>
                        <div className="col-6 d-flex justify-content-center align-items-center border border-1 border-success">
                            <div className="row">
                                <div className="col-5 bg-white border border-1 border-danger">
                                <h5> ***** </h5>
                                    <p className='fs-5 fw-semibold'> The quality of the material for this tee makes the difference between a cheap looking tee and this one which looks polished.I received many compliments while wearing it.</p>
                                    <p fs-5>Sarah D.</p>
                                    <p className='text-decoration-underline fs-5 fw-semibold' role="button">Shop Now</p>
                                </div>
                                <div className="col-5">
                                    <img src={review3} alt="" className='w-100 h-100' />
                                </div>
                            </div>
                        </div>
                        <div className="col-6 d-flex justify-content-center align-items-center border border-1 border-success">
                            <div className="row">
                                <div className="col-5 bg-white border border-1 border-danger">
                                <h5> ***** </h5>
                                    <p className='fs-5 fw-semibold justify'> The quality of the material for this tee makes the difference between a cheap looking tee and this one which looks polished.I received many compliments while wearing it.</p>
                                    <p fs-5>Sarah D.</p>
                                    <p className='text-decoration-underline fs-5 fw-semibold' role="button">Shop Now</p>
                                </div>
                                <div className="col-5">
                                    <img src={review4} alt="" className='w-100 h-100' />
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>

            </div>
        </>
    )
}

export default Review
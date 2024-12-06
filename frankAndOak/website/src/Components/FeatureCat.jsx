import React from 'react';
import feature1 from './../Images/featurecat1.avif';
import feature2 from './../Images/featurecat2.avif';
import feature3 from './../Images/featurecat3.avif';
import feature4 from './../Images/featurecat4.avif';
import feature5 from './../Images/featurecat5.avif';
import feature6 from './../Images/featurecat6.avif';

function FeatureCat() {
  return (
    <>
        <div className='container-fluid border border-1 border-danger'>
            <h3 className='ps-2 my-5'>Feature Categories</h3>
            <div className='row justify-content-center border border-1 border-success'>
                <div className='col'>
                    <img src={feature1} alt="" />
                    <p className='fs-5 ps-1'>Womens sweaters</p>
                </div>
                <div className='col'>
                    <img src={feature2} alt="" />
                    <p className='fs-5 ps-1'>Men sweaters</p>
                </div>
                <div className='col'>
                    <img src={feature3} alt="" />
                    <p className='fs-5 ps-1'>Womens skirts</p>
                </div>
                <div className='col'>
                    <img src={feature4} alt="" />
                    <p className='fs-5 ps-1'>Mens pants</p>
                </div>
                <div className='col'>
                    <img src={feature5} alt="" />
                    <p className='fs-5 ps-1'>Womens jackets</p>
                </div>
                <div className='col'>
                    <img src={feature6} alt="" />
                    <p className='fs-5 ps-1'>Mens jackets</p>
                </div>


            </div>
        </div>

    </>
  )
}

export default FeatureCat
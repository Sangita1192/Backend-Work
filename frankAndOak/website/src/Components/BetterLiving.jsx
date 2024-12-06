import React from 'react';
import betterliving1 from './../Images/betterliving1.webp';
import betterliving2 from './../Images/betterliving2.jpg';
import betterliving3 from './../Images/betterliving3.jpg';
import betterliving4 from './../Images/betterliving4.webp';


function BetterLiving() {
  return (
    <>
        <div className="container-fluid border border-1 border-danger">
            <div className="row m-auto align-items-center border border-1 border-danger py-5 better-living">
                <div className="col-12 col-lg-5 border border-1 border-danger">
                    <h1>Inspire Better Living.</h1>
                    <p className="fs-4 text-secondary my-5 fw-semibold">Born in Canada, we are grounded on innovation, our community, and respecting the planet we all call home.</p>
                    <h2>Who We Are</h2>
                </div>
                <div className="col-12 col-lg-7  border border-1 border-danger">
                   <div className="row my-3">
                        <div className="col-6 position-relative">
                            <img src={betterliving1} className="w-100 h-100" alt="" />
                            <h4 className="text-white position-absolute better-living-text">Sustainable Practices</h4>
                        </div>
                        <div className="col-6 position-relative">
                            <img src={betterliving2} className="w-100" alt="" />
                            <h4 className="text-white position-absolute better-living-text">Design Philosphy</h4>
                        </div>
                   </div>
                   <div className="row my-3">
                        <div className="col-6 position-relative">
                            <img src={betterliving3} className="w-100 h-100" alt="" />
                            <h4 className="text-white position-absolute better-living-text">Fabrics Innvoation</h4>
                        </div>
                        <div className="col-6 position-relative">
                            <img src={betterliving4} className="w-100" alt="" />
                            <h4 className="text-white position-absolute better-living-text">Partners and Factories</h4>
                        </div>
                   </div>
                    

                </div>
            </div>

        </div>
    </>
  )
}

export default BetterLiving
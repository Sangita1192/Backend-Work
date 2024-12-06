import React from 'react';
import './../App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slider1 from './../Images/slider1.webp';
import slider2 from './../Images/slider2.webp';
import slider3 from './../Images/slider3.webp';
import slider4 from './../Images/slider4.webp';
import slider5 from './../Images/slider5.webp';
import slider6 from './../Images/slider6.webp';
import slider7 from './../Images/slider7.webp';
import slider8 from './../Images/slider8.webp';


function Mens_Women() {
  var settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 4.30,
    slidesToScroll: 1,
    initialSlide: 0.33,
    autoplay:true,
    autoplaySpeed:2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.33,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.33,
          slidesToScroll: 1,
          initialSlide: 0.33
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const data = [
    {
      thumbnail: slider1,
      title: 'The SeaCell™ Crewneck Cardigan in Dark Chocolate',
      price: 149.00,
      color: 1
    },
    {
      thumbnail: slider2,
      title: 'The Zip Up Bomber Jacket in Light Beige',
      price: 149.00,
      color: 2
    },
    {
      thumbnail: slider3,
      title: 'The Button-Up Sweater Vest in Space Blue',
      price: 149.00,
      color: 1
    },
    {
      thumbnail: slider4,
      title: 'The Fluid Camp Collar Blouse in White',
      price: 79.00,
      color: 4
    },
    {
      thumbnail: slider5,
      title: 'The Skyline Reversible Maxi Bomber in Rosin',
      price: 219.00,
      color: 2
    },
    {
      thumbnail: slider6,
      title: 'The Skyline Maxi Hooded Coat in Black',
      price: 229.00,
      color: 4
    },
    {
      thumbnail: slider7,
      title: 'The SeaCell™ Crewneck Cardigan in Dark Chocolate',
      price: 149.00,
      color: 1
    },
    {
      thumbnail: slider8,
      title: 'The Margaret Recycled Wool Topcoat in Dark Chocolate',
      price: 449.00,
      color: 1
    },
    {
      thumbnail: slider1,
      title: 'The Skyline Reversible Maxi Bomber in Black',
      price: 219.00,
      color: 2
    },
    {
      thumbnail: slider2,
      title: 'The Hygge Puffer Coat in Black',
      price: 449.00,
      color: 3
    },
    {
      thumbnail: slider3,
      title: 'The Skyline Loose Overshirt in Brown Black',
      price: 219.00,
      color: 2
    },]
  return (
    <>
      <div className='container-fluid border border-1 border-danger p-0'>
        <div className="container">
          <div className='row justify-content-between pt-5 '>
            <div className=" col-12 col-lg-10">
              <h2 className='border border-1 border-danger'>Season's must-haves, now at 25% off*.</h2>
            </div>
            <div className=" col-12 col-lg-2">
              <h4>Women's / Mens</h4>
            </div>
          </div>
        </div>
        <div className="row m-auto mt-lg-5 mt-md-3 mt-2 gap-lg-2 gap-1 justify-content-cener border border-1 border-success p-0">
          <Slider {...settings}>
            {
              data.map((items, index) => {
                return (
                  <>
                    <div className='col me-2 ' >
                      <img src={items.thumbnail} alt="" style={{ width:'100%'}} />
                      <h6 className=' mt-2 m-1'>{items.title}</h6>
                      <p className='mb-1 ms-1'> <span className="text-decoration-line-through text-danger me-1">  ${items.price} </span>  ${(items.price)*0.25}</p>
                      <p className='text-secondary fw-bold ms-1 my-1'>{items.color} Colour</p>
                    </div>
                  </>
                )
              })
            }


          </Slider>

        </div>
      </div>


    </>
  )
}

export default Mens_Women
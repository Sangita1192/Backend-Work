"use client"

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchCart } from "../redux/slices/cartSlice";

export function Card({ product, filepath }) {

  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState('');
  const [user, setUser] = useState('');

  const userData = useSelector((state) => state.user.value);


  //reterive user data
  useEffect(() => {
    if (userData.data)  setUser(userData.data._id);  
   
  }, [userData])


  useEffect(() => {
    setSelectedColor(product.color[0]._id);
  }, [product])



  const handleAddToCart = (size) => {
    const cartData = {
      user: user,
      product: product._id,
      color: selectedColor,
      size
    }
    axios.post('http://localhost:4800/api/website/cart/create-cart', cartData)
      .then((response) => {
        console.log(response);
        dispatch(fetchCart(user));
      })
      .catch((error) => {
        console.log(error);
      })
  }
  return (
    <div className='cursor-pointer group'>
      <div className=' w-full h-full'>
        <div className='group relative'>
          <span className='bg-black text-white absolute right-2 top-2 z-[9999] text-[8px] sm:text-[10px] font-medium uppercase px-0.5 sm:px-1 py-0.5'>

            {

              (((product.mrp - product.price) / product.mrp) * 100).toFixed(2)

            }
            % off
          </span>
          <img className='h-[300px] w-full object-cover' src={filepath + product.thumbnail} alt="Womens Denim" />
          <img className='h-[300px] w-full duration-300 z-[999] absolute top-0 group-hover:block hidden object-cover' src={filepath + product.secondary_thumbnail} alt="Womens Denim" />
          <button className={`w-[95%] text-center box-border bg-white py-3 text-[14px] font-medium absolute bottom-2 left-[2%] z-[99999]`}>Quick Add
            <div className="bg-black h-[100%] w-[100%] absolute top-0 left-0 z-[9999999] flex-wrap justify-content-center group-hover:flex hidden">
              {
                product.size.map((size, index) => {
                  return (
                    <>
                      <button
                        key={index}
                        className="uppercase text-white w-[19%]"
                        onClick={() => handleAddToCart(size._id)}>
                        {size.name}
                      </button>
                    </>
                  )

                })
              }

            </div>
          </button>
        </div>
        <h5 className='sm:text-[14px] text-[12px] flex gap-3 mt-2 font-semibold'>{product.name}
        </h5>
        <div className='sm:text-[14px] text-[13px] font-medium mt-1 sm:mt-3'>
          <span> ${product.price} </span> <br />
          <span className="text-gray-500 line-through"> ${product.mrp} </span>

        </div>
        <span className='sm:text-[16px] text-[12px] block'>{product.color.length} color</span>
        <div className='flex mt-1'>
          {
            product.color.map((color, index) => {
              return (
                <>
                  <div
                    key={index}
                    onClick={() => setSelectedColor(color._id)}
                    className={`${selectedColor == color._id ? "shadow-[0_0_2px_5px_rgba(0,0,0,0.5)]" : ""} me-3 sm:w-5 sm:h-5 h-3 w-3 rounded-full border border-black flex items-center justify-center`}
                    style={{ backgroundColor: color.code }}
                  >
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

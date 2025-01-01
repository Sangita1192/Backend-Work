import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActiveProductCatAsPerParentCat } from "../redux/slices/productCategorySlice";

export function ThisJustInMegaMenu({ menuHover, setMenuHover }) {
  return (
    <div onMouseOver={() => setMenuHover(1)} onMouseOut={() => setMenuHover(0)} className={`${menuHover == 1 ? "opacity-100 visible" : "opacity-0 invisible"} duration-500 w-full bg-[#F9F9F9] absolute left-0 top-[100%]`}>
      <div className="grid grid-cols-[28%_auto] gap-24 p-10">
        <div className="flex justify-between">
          <ul className="space-y-2">
            <li>
              <h4 className="text-[15px] font-medium underline underline-offset-8 pb-3">
                Women&apos;s New Arrivals
              </h4>
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
              Shop All
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
              Tops
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
              Bottoms
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
              Jackets & Coats
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
              Blazers
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
              Dresses
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
              Accessories
            </li>
          </ul>
          <ul className="space-y-2">
            <li>
              <h4 className="text-[15px] font-medium underline underline-offset-8 pb-3">
                Men&apos;s New Arrivals
              </h4>
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
              Shop All
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
              Tops
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
              Bottoms
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
              Overshirts
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
              Jackets & Coats
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
              Accessories
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <figure className="w-full h-[280px] relative">
            <img className="h-full w-full cursor-pointer shadow-md object-cover object-center" src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_90187318-a3f1-492f-9377-b18381a175a6_600x.jpg?v=1724869721" alt="" />
            <h4 className="text-[18px] font-medium text-white absolute bottom-5 left-5">Women&apos;s New  Arrivals</h4>
          </figure>
          <figure className="w-full h-[280px] relative">
            <img className="h-full w-full cursor-pointer shadow-md object-cover object-center" src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop-1_3ac58a1d-4386-40be-a9bf-9db422c8941d_600x.jpg?v=1724869727" alt="" />
            <h4 className="text-[18px] font-medium text-white absolute bottom-5 left-5">Men&apos;s New  Arrivals</h4>
          </figure>
        </div>
      </div>
    </div>
  );
}

export function WomenMegaMenu({ menuHover, setMenuHover }) {
  const [productCat, setProductCat] = useState([])
  const dispatch = useDispatch();
  const parentCategoryData = useSelector((state) => state.parentCategory.value);
  useEffect(() => {
    if (parentCategoryData.data) {
      const selectedCat = parentCategoryData.data.filter((cat) => cat.name === 'Men');
      const id = selectedCat[0]._id;
      setProductCat(dispatch(fetchActiveProductCatAsPerParentCat(id)))
    }
  }, [parentCategoryData])
  return (
    <div onMouseOver={() => setMenuHover(2)} onMouseOut={() => setMenuHover(0)} className={`${menuHover == 1 ? "opacity-100 visible" : "opacity-0 invisible"} duration-500 w-full bg-[#F9F9F9] absolute left-0 top-[100%]`}>
      <div className="grid grid-cols-[38%_auto] gap-32 p-10">
        <div className="flex justify-between">
          <ul className="space-y-2">
            {
              productCat.map((product) => (
                <li>
                  <h4 className="text-[15px] font-medium underline underline-offset-8 pb-3">
                    Featured
                  </h4>
                  <ul>
                    <li className="text-[13px] font-semibold cursor-pointer hover:underline">
                      New In
                    </li>
                    <li className="text-[13px] font-semibold cursor-pointer hover:underline">
                      Best Sellers
                    </li>
                  </ul>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <figure className="w-full relative">
            <img className="h-full w-full cursor-pointer shadow-md object-cover object-center" src="https://www.frankandoak.com/cdn/shop/files/Menu_tile_1cd466bb-b15c-4e83-9461-c8c32bb3211e_600x.jpg?v=1725974027" alt="" />
            <h4 className="text-[18px] font-medium text-white absolute bottom-5 left-5">Sweaters</h4>
          </figure>
          <figure className="w-full  relative">
            <img className="h-full w-full cursor-pointer shadow-md object-cover object-center" src="https://www.frankandoak.com/cdn/shop/files/Menu_tile-1_64579674-60e7-42d4-a59a-a13e6b96e7cd_600x.jpg?v=1725974022" alt="" />
            <h4 className="text-[18px] font-medium text-white absolute bottom-5 left-5">Jackets</h4>
          </figure>
        </div>
      </div>
    </div>
  );
}

export function MenMegaMenu({ menuHover, setMenuHover }) {
  const [productCategory, setProductCat] = useState([]);
  const dispatch = useDispatch();
  const category = menuHover;
  const parentCategoryData = useSelector((state) => state.parentCategory.value);
  const productCat = useSelector((state) => state.productCategory.value);
  useEffect(() => {
    if (parentCategoryData.data) {
      if(menuHover){  
        const selectedCat = parentCategoryData.data.filter((cat) => cat.name === menuHover);
        const id = selectedCat[0]._id;
        dispatch(fetchActiveProductCatAsPerParentCat(id));
      }
      
    }
  }, [parentCategoryData, dispatch,menuHover])

  useEffect(() => {
    if (productCat.data) setProductCat(productCat.data);
  }, [productCat])
  return (
    <div onMouseOver={() => setMenuHover(category)} onMouseOut={() => setMenuHover(0)} className={`${menuHover ? "opacity-100 visible" : "opacity-0 invisible"} duration-500 w-full bg-[#F9F9F9] absolute left-0 top-[100%]`}>
      <div className="grid grid-cols-[38%_auto] gap-32 p-10">
        <div className="flex justify-between">
          {
            productCategory.map((product) => (
              <ul>
                <li>
                  <h4 className="text-[15px] font-medium underline underline-offset-8 pb-3">
                    Featured
                  </h4>
                  <ul>
                    <li className="text-[13px] font-semibold cursor-pointer hover:underline">
                      New In
                    </li>
                    <li className="text-[13px] font-semibold cursor-pointer hover:underline">
                      Best Sellers
                    </li>
                  </ul>
                </li>
              </ul>

            ))
          }

        </div>
        <div className="grid grid-cols-2 gap-10">
          <figure className="w-full relative">
            <img className="h-full w-full cursor-pointer shadow-md object-cover object-center" src="https://www.frankandoak.com/cdn/shop/files/Menu_tile-3_a8945a6a-262a-4161-a9a2-b5608646defd_600x.jpg?v=1725974015" alt="" />
            <h4 className="text-[18px] font-medium text-white absolute bottom-5 left-5">Sweaters</h4>
          </figure>
          <figure className="w-full  relative">
            <img className="h-full w-full cursor-pointer shadow-md object-cover object-center" src="https://www.frankandoak.com/cdn/shop/files/Menu_tile-2_03931173-c63e-46a0-9ac9-d2d8793a230b_600x.jpg?v=1725974013" alt="" />
            <h4 className="text-[18px] font-medium text-white absolute bottom-5 left-5">Jackets</h4>
          </figure>
        </div>
      </div>
    </div>
  );
}

export function OurStoryMegaMenu({ menuHover, setMenuHover }) {
  return (
    <div onMouseOver={() => setMenuHover(4)} onMouseOut={() => setMenuHover(0)} className={`${menuHover == 4 ? "opacity-100 visible" : "opacity-0 invisible"} duration-500 w-full bg-[#F9F9F9] absolute left-0 top-[100%]`}>
      <div className="grid grid-cols-1 p-10">
        <div className="grid grid-cols-6 gap-7">
          <figure className="w-full h-[280px] relative">
            <img className="h-full w-full cursor-pointer shadow-md object-cover object-center" src="https://www.frankandoak.com/cdn/shop/files/Who_we_are_-_NAV_600x.jpg?v=1712763767" alt="" />
            <h4 className="text-[18px] font-medium text-white absolute bottom-5 left-5">Who we are</h4>
          </figure>
          <figure className="w-full h-[280px] relative">
            <img className="h-full w-full cursor-pointer shadow-md object-cover object-center" src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_23_600x.jpg?v=1712763780" alt="" />
            <h4 className="text-[18px] font-medium text-white absolute bottom-5 left-5">Sustainable Practices</h4>
          </figure>
          <figure className="w-full h-[280px] relative">
            <img className="h-full w-full cursor-pointer shadow-md object-cover object-center" src="https://www.frankandoak.com/cdn/shop/files/Design_Philosophy_-_NAV_600x.jpg?v=1712763785" alt="" />
            <h4 className="text-[18px] font-medium text-white absolute bottom-5 left-5">Design Philosphy</h4>
          </figure>
          <figure className="w-full h-[280px] relative">
            <img className="h-full w-full cursor-pointer shadow-md object-cover object-center" src="https://www.frankandoak.com/cdn/shop/files/Fabric_Innovation_-_NAV_600x.jpg?v=1712763794" alt="" />
            <h4 className="text-[18px] font-medium text-white absolute bottom-5 left-5">Fabrics</h4>
          </figure>
          <figure className="w-full h-[280px] relative">
            <img className="h-full w-full cursor-pointer shadow-md object-cover object-center" src="https://www.frankandoak.com/cdn/shop/files/Circular_Process_-_NAV_600x.jpg?v=1712763798" alt="" />
            <h4 className="text-[18px] font-medium text-white absolute bottom-5 left-5">Circular Denim</h4>
          </figure>
          <figure className="w-full h-[280px] relative">
            <img className="h-full w-full cursor-pointer shadow-md object-cover object-center" src="https://www.frankandoak.com/cdn/shop/files/Partners_Factories_-_NAV_600x.jpg?v=1712763804" alt="" />
            <h4 className="text-[18px] font-medium text-white absolute bottom-5 left-5">Partners and Fabrics</h4>
          </figure>
        </div>
      </div>
    </div>
  );
}
import React, { useEffect, useState } from 'react'
import { fetchFeaturedCategoryAsParentCat } from '../redux/slices/productCategorySlice'
import { useDispatch, useSelector } from 'react-redux'
import { Oval } from 'react-loader-spinner';

export default function FeaturedCategories() {
    const dispatch = useDispatch();
    const [featuredCategory, setFeaturedCategory] = useState([]);
    const [filepath, setFilepath] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Women');
    const parentCategoriesData = useSelector((state) => state.parentCategory.value);
    const featuredCat = useSelector((state) => state.productCategory.value);


    const parentCat = parentCategoriesData?.data;
    console.log(parentCat);

    const handleFeatureCat = (category) => {
        setSelectedCategory(category)
        const selectedCategory = parentCat.filter((cat) => cat.name.toLowerCase() === decodeURIComponent(category).toLowerCase()); //decode the URL componet "Women%20%26%20Kids" with "Women & Men"
        const id = selectedCategory[0]._id;
        dispatch(fetchFeaturedCategoryAsParentCat(id));
    }
    useEffect(() => {
        if (parentCat) {
            handleFeatureCat('Women');
        }
    }, [parentCat])

    useEffect(() => {
        console.log('featured Category===>', featuredCat);
        if (featuredCat.data) setFeaturedCategory(featuredCat.data);
        if (featuredCat.filePath) setFilepath(featuredCat.filePath)
    }, [featuredCat])

    return (
        <section className='max-w-[1460px] mx-auto py-[50px] px-1'>
            <div className='flex items-center justify-between px-[15px]'>
                <h3 className='md:text-[32px] text-[22px] font-medium'>Featured Categories</h3>
                <div className='md:text-[24px] text-[16px] font-semibold'>
                    <span
                        className={`${selectedCategory === 'Women' ? 'underline' : ''}`}
                        onClick={(e) => handleFeatureCat(e.target.textContent)}
                    >
                        Women
                    </span>/
                    <span
                        className={`${selectedCategory === 'Men' ? 'underline' : ''}`}
                        onClick={(e) => handleFeatureCat(e.target.textContent)}
                    >
                        Men
                    </span>
                </div>
            </div>

            <div className='grid md:grid-cols-4 grid-cols-2 md:space-y-0 xs:space-y-8 space-y-12 py-[50px] md:gap-5 gap-3 relative'>
                {
                    featuredCategory.length > 0 ?
                        featuredCategory.map((category) => (
                            < div key={category._id} className='cursor-pointer '>
                                <div className=' w-full h-full'>
                                    <img className='w-full h-full object-cover' src={filepath + category.thumbnail} alt="Womens Denim" />
                                    <h5 className='text-[15px] mt-2 font-semibold'>{category.name}</h5>
                                </div>
                            </div>
                        ))
                        :
                        <div className="flex justify-center items-center absolute top-[50%] transform -translate-x-1/2 left-[50%] transform -translate-y-1/2">
                            <Oval
                                height={80}
                                width={80}
                                color="#4A90E2"
                                secondaryColor="#A1D1FF"
                                strokeWidth={2}
                                strokeWidthSecondary={2}
                            />
                        </div>

                }

                {/* <div className='cursor-pointer'>
                    <div className=' w-full h-full'>
                        <img className=' w-full h-full object-cover' src="/images/WomensJackets.webp" alt="Womens Jackets" />
                        <h5 className='text-[15px] mt-2 font-semibold'>Womens Jackets</h5>
                    </div>
                </div>
                <div className='cursor-pointer'>
                    <div className=' w-full h-full'>
                        <img className='w-full h-full object-cover' src="/images/MensDenims.webp" alt="Mens Denim" />
                        <h5 className='text-[15px] mt-2 font-semibold'>Mens Denims</h5>
                    </div>
                </div>
                <div className='cursor-pointer'>
                    <div className=' w-full h-full'>
                        <img className='w-full h-full object-cover' src="/images/MensJackets.webp" alt="Mens Jackets" />
                        <h5 className='text-[15px] mt-2 font-semibold'>Mens Jackets</h5>
                    </div>
                </div> */}
            </div>
        </section >
    )
}
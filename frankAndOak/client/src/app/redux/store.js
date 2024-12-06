import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from './slices/userSlice'
import ParentCategorySlice  from './slices/parentCategorySlice'
import ProductCategorySlice from './slices/productCategorySlice'
import ProductSlice from './slices/productSlice'
import CartSlice from './slices/cartSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    parentCategory: ParentCategorySlice,
    productCategory: ProductCategorySlice,
    product: ProductSlice,
    cart: CartSlice
  },
})
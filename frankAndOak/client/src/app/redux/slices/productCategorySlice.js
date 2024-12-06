import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

export const fetchActiveProductCategory = createAsyncThunk(
    'productCategory/fetchActiveProductCategory',
    async(_, thunkApi)=>{
        try{
            const response = await axios.get('http://localhost:4800/api/website/product-categories/active-products-categories');
            return response.data;
        }
        catch(error){
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

const initialState ={
    value: {},
    loading: false,
    error: null
}

export const ProductCategorySlice = createSlice({
    name:"productCategory",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchActiveProductCategory.fulfilled, (state, action)=>{
            state.value = action.payload;
            state.loading = false;
           
        })
        .addCase(fetchActiveProductCategory.rejected, (state,action)=>{
            state.error = action.payload;
            state.loading = false;
        })
    }

})


export default ProductCategorySlice.reducer;
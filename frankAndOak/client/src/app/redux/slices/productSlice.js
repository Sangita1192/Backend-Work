import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

export const fetchActiveProducts = createAsyncThunk(
    'product/fetchActiveProducts',
    async(category,thunkApi)=>{
        try{
            const response = await axios.get(`http://localhost:4800/api/website/products/active-products/${category}`);
            return response.data;
        }
        catch(error){
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

const initialState ={
    value:{},
    loading:false,
    error:null
}

const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchActiveProducts.fulfilled, (state,action)=>{
            state.value = action.payload;
            state.loading = false;
        })
        .addCase(fetchActiveProducts.rejected, (state, action)=>{
            state.error = action.payload;
        });

    }
})

export default ProductSlice.reducer;
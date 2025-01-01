import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    value: {},
    loading: false,
    error: null
}
//fetch order details for specific user
export const fetchOrderDetails = createAsyncThunk(
    'order/fetchOrderDetails',
    async (userId, thunkApi) => {
        try {
            const response = await axios.get(`http://localhost:4800/api/website/order/read-orderhistory/${userId}`);
            return response.data;
        }
        catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
)

const OrderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
            builder
            .addCase(fetchOrderDetails.fulfilled, (state, action) => {
                state.value = action.payload;
                console.log("orderDetails===>", state.value);
            })
            .addCase(fetchOrderDetails.rejected, (state, action) => {
                state.error = action.payload;
                console.log("orderDetails===>", state.error);
            })

    }
});

export default OrderSlice.reducer;
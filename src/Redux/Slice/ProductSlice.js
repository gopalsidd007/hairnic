import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



let fetch_url="https://fakestoreapi.com/products"

export const fetchProduct=createAsyncThunk("fetchproduct",
async()=>{
    const res=await axios.get(fetch_url)
    console.log("get data from url",res.data);
    return res?.data
}
)

export const ProductSlice=createSlice({
    name:"fetchdata",
    initialState:{
        isLoading:false,
        data:[],
        error:""
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProduct.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(fetchProduct.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
            state.error=null
        })
        builder.addCase(fetchProduct.rejected,(state,action)=>{
            state.isLoading=false;
            state.data=[];
            state.error=action.payload.message;
        })
    }
})

export default ProductSlice.reducer
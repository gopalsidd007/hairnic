import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../Slice/ProductSlice";


 const ReduxStore=configureStore({
    reducer:{
        fetchdata:ProductReducer
    }
 })

 export default ReduxStore
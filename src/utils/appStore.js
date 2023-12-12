import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/slices/userSlice"
import movieReducer from '../utils/slices/movieSlice'
const appStore = configureStore({
    reducer:{
        user:userReducer,
        movie:movieReducer
    }
})

export default appStore;
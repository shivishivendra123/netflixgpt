import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/slices/userSlice"
import movieReducer from '../utils/slices/movieSlice'
import gptReducer from "../utils/slices/GptSlice"
const appStore = configureStore({
    reducer:{
        user:userReducer,
        movie:movieReducer,
        gpt:gptReducer
    }
})

export default appStore;
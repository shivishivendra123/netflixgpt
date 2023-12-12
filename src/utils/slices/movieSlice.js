import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        movieList:null
    },
    reducers:{
        populateMovie:(state,action)=>{
            state.movieList = action.payload;
        }
    }
})

export const {populateMovie} = movieSlice.actions
export default movieSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        movieList:null,
        VideoTrailer:null
    },
    reducers:{
        populateMovie:(state,action)=>{
            state.movieList = action.payload;
        },
        addTrailerData:(state,action)=>{
            state.VideoTrailer = action.payload;
        }
    }
})

export const {populateMovie,addTrailerData} = movieSlice.actions
export default movieSlice.reducer
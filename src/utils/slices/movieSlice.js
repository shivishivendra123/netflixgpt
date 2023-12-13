import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        movieList:null,
        VideoTrailer:null,
        TopRated:[],
        NowPlaying:[]
    },
    reducers:{
        populateMovie:(state,action)=>{
            state.movieList = action.payload;
        },
        addTrailerData:(state,action)=>{
            state.VideoTrailer = action.payload;
        },
        addTopRated:(state,action)=>{
            state.TopRated = action.payload
        },
        addNowPlaying:(state,action)=>{
            state.NowPlaying = action.payload
        }
        
    }
})

export const {populateMovie,addTrailerData,addTopRated,addNowPlaying} = movieSlice.actions
export default movieSlice.reducer
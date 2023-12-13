import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:"gpt",
    initialState:{
        gptres:null
    },
    reducers:{
        addMoviesToGptArr:(state,action)=>{
            state.gptres = action.payload;
        }
    }
})
export const {addMoviesToGptArr} = GptSlice.actions;
export default GptSlice.reducer
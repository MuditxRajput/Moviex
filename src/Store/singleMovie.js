import { createSlice } from "@reduxjs/toolkit";

const singleMovie = createSlice({
    name : "singlemovie",
    initialState : {cast:[]},
    reducers:{
        addCast:(state,action)=>{
            state.cast = action.payload
        }
    }
})

export default singleMovie.reducer;
export const {addCast} = singleMovie.actions;
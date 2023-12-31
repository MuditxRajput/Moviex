import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './movieSlice';
import singlemovieReducer from './singleMovie';
const store = configureStore({
        reducer:{
            movies: moviesReducer,
            singlemovie : singlemovieReducer,
        }
    // movies : useMovieReducer,
})

export default store;
import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    popularMovies: [],
    backgroundVideo: [],
    openMenu: false,
    trendingMovies: [],
    shimmer: false,
    popular: [],
    topRated: [],
    singleMovies: [],
    search: [],
  },
  reducers: {
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addBackgroundVideo: (state, action) => {
      state.backgroundVideo = action.payload;
    },
    addOpenMenu: (state, action) => {
      state.openMenu = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addPopular: (state, action) => {
      state.popular = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    addShimmer: (state, action) => {
      state.shimmer = action.payload;
    },
    addSingleMovies: (state, action) => {
      state.singleMovies = action.payload;
    },
    addSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const {
  addPopularMovies,
  addBackgroundVideo,
  addOpenMenu,
  addTrendingMovies,
  addShimmer,
  addPopular,
  addTopRated,
  addSingleMovies,
  addSearch,
} = movieSlice.actions;

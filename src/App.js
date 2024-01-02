import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import SingleMovie from './Components/SingleMovie';
import Homepage from './Homepage';
import SearchItems from './SearchItem/SearchItems';
import store from './Store/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/single/:id" element={<SingleMovie />} />
          <Route path="/searchMovies/:query" element={<SearchItems/>} />
          
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </Provider>
  );
};

export default App;

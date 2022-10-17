import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss"

import Header from './components/Common/Header/Header';
import Footer from './components/Common/Footer/Footer';

import HomePage from './pages/HomePage/HomePage';
import MenuPage from './pages/MenuPage/MenuPage';

import ScrollToTop from './helpers/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/menu" element={<MenuPage />}></Route>
          </Routes>
        </ScrollToTop>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;

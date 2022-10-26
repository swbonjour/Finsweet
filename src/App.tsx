import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss"

import Header from './components/Common/Header/Header';
import Footer from './components/Common/Footer/Footer';

import HomePage from './pages/HomePage/HomePage';
import MenuPage from './pages/MenuPage/MenuPage';
import AboutPage from './pages/AboutPage/AboutPage';
import StoryPage from './pages/StoryPage/StoryPage';
import BlogPage from './pages/BlogPage/BlogPage';
import BlogInnerPage from './pages/BlogInnerPage/BlogInnerPage';
import ContactPage from './pages/ContactPage/ContactPage';

import ScrollToTop from './helpers/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <ScrollToTop>
          <Routes>
            <Route path="/Finsweet" element={<HomePage />}></Route>
            <Route path="/Finsweet/menu" element={<MenuPage />}></Route>
            <Route path="/Finsweet/about" element={<AboutPage />}></Route>
            <Route path="/Finsweet/story" element={<StoryPage />}></Route>
            <Route path="/Finsweet/blog" element={<BlogPage />}></Route>
            <Route path="/Finsweet/blog/theme" element={<BlogInnerPage />}></Route>
            <Route path="/Finsweet/contact" element={<ContactPage />}></Route>
          </Routes>
        </ScrollToTop>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;

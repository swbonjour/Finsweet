import React from 'react';

import "./App.scss"

import Header from './components/Common/Header/Header';
import Footer from './components/Common/Footer/Footer';

import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;

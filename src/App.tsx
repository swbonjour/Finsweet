import React from 'react';

import "./App.scss"

import Header from './components/Header/Header';

import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;

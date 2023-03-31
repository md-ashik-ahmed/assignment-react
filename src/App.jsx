import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import Bookmark from './components/Bookmark/Bookmark';

function App() {
  
  return (
    <div className="App">
      <Header></Header>

      <div className="container d-flex">

      <div className="home">
      <Home></Home>
      </div>

      <div className="bookmark">
        <Bookmark></Bookmark>
      </div>
      </div>
    </div>
  )
}

export default App

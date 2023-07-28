import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './Dashboard/Index/Main';
import Shop from './Dashboard/Shop/shop';
import Header from './Dashboard/Header/Header';
import Footer from './Dashboard/Footer/Footer'
import Loginx from './Dashboard/Auth/Login/Loginx';
import Registerx from './Dashboard/Auth/Register/Registerx';
import {MongoClient} from 'mongodb';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<><Header/> < Main /><Footer/></>}></Route>
          <Route exact path='/index' element={<><Header/> < Main /><Footer/></>}></Route>
          <Route exact path='/shop' element={<><Header/> < Shop /><Footer/></>}></Route>
          <Route exact path='/login' element={<Loginx/>}></Route>
          <Route exact path='/register' element={<Registerx/>}></Route>
        </Routes>
      </Router>
    );
  }
}
  
export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Main from './Dashboard/Index/Main';
import Shop from './Dashboard/Shop/shop';
import {MongoClient} from 'mongodb';
  
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            <ul className="App-header">
              <li>
                <Link to="/">Main</Link>
              </li>
              <li>
                <Link to="/about">Main</Link>
              </li>
              <li>
                <Link to="/contact">Shop</Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/' element={< Main />}></Route>
                 <Route exact path='/about' element={< Main />}></Route>
                 <Route exact path='/contact' element={< Shop />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
  
export default App;

import './App.css';
import React from 'react';
import Navbar from './navbar.js';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import Query1 from './pages/query1';
import Query2 from './pages/query2';
// import Query3 from './pages/query3';

function App() {
  return (
    <div className="App">
      <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/query1' element={<Query1/>} />
        <Route path='/query2' element={<Query2/>} />
        {/* <Route path='/query3' element={<Query3/>} /> */}
    </Routes>
    </Router>
    </div>
  );
}

export default App;

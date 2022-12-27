import React from 'react';
import './App.css';
import {Routes,Route,Navigate} from 'react-router-dom';
import Home  from './Home';
import Contact from './Contact';
import Service from './Service';
import About from './About';
import Navbar  from './Navbar';
import Login from './Login';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/contact" element={<Contact/>}></Route>
    <Route exact path="/service" element={<Service/>}></Route>
    <Route exact path="/about" element={<About/>}></Route>
    <Route exact path="/login" element={<Login/>}></Route>
    {/* <Route path="*" element={<h1> Error 404</h1>}></Route> */}
    <Route path='*' element={<Navigate replace to="/"></Navigate>}></Route>
    </Routes>
    
    </>
  );
}

export default App;

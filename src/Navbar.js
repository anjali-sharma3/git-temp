import React from 'react';
import { NavLink } from 'react-router-dom';



function Navbar() {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className='row'>
          <div className='col-10 mx-auto'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Codingpedia</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                  <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto">
                    <li className="nav-item">
                      <NavLink  exact activeclassname="is-active" className="nav-NavLink is-active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink  exact activeclassname="is-active"className="nav-NavLink" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink  exact activeclassname="is-active"className="nav-NavLink" to="/contact">Contact us</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink exact activeclassname="is-active" className="nav-NavLink" to="/service">Services</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink exact activeclassname="is-active" className="nav-NavLink" to="/Login">Login</NavLink>
                    </li>
                  </ul>
                  
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar; 
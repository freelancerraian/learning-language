import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';
import './header.css';

const Header = () => {
    return (
        <div>
            <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid container">
                  <img src={logo} alt="" />
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <NavLink className="nav-link cus-style" to="/">Home</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link cus-style" to="/services">Services</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link cus-style" to="/about">About</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link cus-style" to="/contact">Contact</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link cus-style" to="/stor"><i class="fas fa-cart-plus"></i> Stor Coming Soon</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
        </div>
    );
};

export default Header;
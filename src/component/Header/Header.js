import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className="mb-5">
            <nav>
                <nav className="navbar navbar-expand navbar-light bg-dark text-white">
                <div className="container-fluid">

                    <a className="navbar-brand text-white" href="#brand"><span className="brand-name"> Apollo Hospital </span></a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                        <ul className="navbar-nav me-auto  mb-2 mb-lg-0 mx-auto">
                            <li className="nav-item">
                            <h5>Make a Doctors Team</h5>
                            <p>The World is affected and we are  ready for fighiting with Covid-19</p>
                            <h6>Total Budget 100 Million</h6>
                            </li> 
                        </ul>

                        <div className="d-sm-block">
                            <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search Here..." aria-label="Search"/>
                            <button className="btn btn-outline-success bg-warning text-dark" type="submit">Search</button>
                        </form>
                        </div>
                    </div>
                </div>
                </nav>
            </nav>

          
        </div>
    );
};

export default Header;
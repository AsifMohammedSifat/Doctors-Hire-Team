import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className="mb-5 nav-style">
            {/* navbar started  */}
            <nav className = "navbar  navbar-expand-sm navbar-light bg-dark text-white">
                <div className="container-fluid">
                    
                    {/* Nav brand name  */}
                    <a className="navbar-brand text-white m-auto" href="#brand"><span className="brand-name"> Apollo Hospital </span></a>

                    {/* small device button icon */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-white"></span>
                    </button>

                    {/* Navbar middle text  */}
                    <div className="collapse navbar-collapse" id="navbarScroll">
                           <ul className="navbar-nav me-auto  mb-2 mb-lg-0 mx-auto">

                            <li className="nav-item">
                            <h4>Make a Doctors Team</h4>
                            <p>The World is affected and we are  ready for fighiting with Covid-19</p>
                            <h4 className="text-warning">Total Budget:100 Million</h4>
                            </li> 
                           </ul>

                           {/* search field  */}
                        <div className="d-sm-block">
                            <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search Here..." aria-label="Search"/>
                            <button className="btn btn-outline-success bg-warning text-dark" type="submit">Search</button>
                            </form>
                       </div>  


                    </div>
                </div>
             </nav>



        </div>
    );
};

export default Header;


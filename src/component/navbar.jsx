import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

    return (
        <div className="container">
            <nav>
                <div className="nav-img-h1">
                    <img src="./src/imgs/logoico.png" className='logoimage' />
                    <h1>BORCELLE</h1>
                </div>
                <div className="Headerlinks">
                    <Link to="/">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/courses">COURSES</Link>
                    <Link to="/shop">SHOP</Link>
                    <Link to="/contact">CONTACT</Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

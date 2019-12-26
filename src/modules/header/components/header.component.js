import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <nav className="nav-bar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <h1>
                <Link to={'/'} className="text-light">
                    CRUD - React, Redux Hooks, Axios
                </Link> 
                <Link to={'/product'} className="btn btn-danger nuevo-post d-block d-md-inline-block">
                    New Product &#43;
                </Link> 
            </h1>
        </nav>
    );
}

export default Header;
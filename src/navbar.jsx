import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

const TopNavigationBar = () => {
    return (
        <nav className="navbar">
            <div className="brand-logo">DEV@Deakin</div>
            <input 
                type="text"
                className="search-bar"
                placeholder="Search"
            />
            <div className="action-buttons">
                <Link to="/login">
                    <button className="login-button">Log In</button>
                </Link>
            </div>
        </nav>
    );
}

export default TopNavigationBar;

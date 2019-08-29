import React from 'react'
import {NavLink} from 'react-router-dom'
import './App.css'

const NavBar = () => (
    <div>
        <div className="company__name">Build Beautiful</div>
        <div className="navbar__main">
            <nav>
                <NavLink to='/' className="nav-items">HOME</NavLink>
                <NavLink to='/Plan' className="nav-items">PLAN</NavLink>
                <NavLink to='/Estimation' className="nav-items">ESTIMATION</NavLink>
                <NavLink to='/Elevation' className="nav-items">ELEVATION</NavLink>
                <NavLink to='/Interior' className="nav-items">INTERIOR</NavLink>
                <NavLink to='/Store' className="nav-items">STORE</NavLink>
            </nav>
        </div>
    </div>
);
export default NavBar;
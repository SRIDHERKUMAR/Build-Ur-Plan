import React from 'react'
import {NavLink} from 'react-router-dom'
import './App.css'
import {logout} from "./redux/actions/login_actions";
import {connect} from "react-redux";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div className="company__name">Build Beautiful
                    <span className="nav-section">
                        <button className="button" onClick={() => this.props.logout(true)}>Logout</button>
                    </span>
                </div>
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
        )
    }
}

const mapDispatchToProps = dispatch => ({
    logout: (data) => dispatch(logout(data)),
});

export default connect(null, mapDispatchToProps)(NavBar);

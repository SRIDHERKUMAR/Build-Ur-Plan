import React from 'react'
import { NavLink} from 'react-router-dom'
import './App.css'
import {logout} from "./redux/actions/login_actions";
import {connect} from "react-redux";
const NAV_ITEMS = [
    {title: 'HOME', path: '/home'},
    {title: 'PLAN', path: '/plan'},
    {title: 'ESTIMATE', path: '/estimate'},
    {title: 'ELEVATION', path: '/elevation'},
    {title: 'INTERIOR', path: '/interior'},
    {title: 'STORE', path: '/store'}
];

function getClassName(path, activeRoute) {
    return path !== activeRoute ? "nav-items" : "nav-items active";
}

function getNavItems() {
    return NAV_ITEMS.map((item) => {
        return <NavLink key={item.title} to={item.path} className={getClassName(this.props.location.pathname, item.path)}>
                    {item.title}
               </NavLink >;
    });
}

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
                        {getNavItems.call(this)}
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

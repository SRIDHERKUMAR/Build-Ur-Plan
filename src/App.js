import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {connect} from "react-redux";
import Home from './Home';
import Login from "./containers/userLogin/login";
import './App.css';

class App extends Component {
    render() {
        const {login}=this.props;
        return (
            <div>
                { !login &&
                    <Router>
                        <Login/>
                    </Router>
                }
                { login &&
                    <Router>
                        <Home />
                    </Router>
                }

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.loginReducer.login,
    };
};

export default connect(mapStateToProps, null)(App);


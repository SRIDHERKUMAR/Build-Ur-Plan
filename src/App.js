import React, {Component} from 'react';
import {BrowserRouter as Router,} from 'react-router-dom';
import Home from './Home'
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                    <Router>
                        <Home/>
                    </Router>
            </div>
        );
    }
}

export default App;

import React from 'react'
import { Route } from 'react-router-dom'
import {withRouter} from 'react-router-dom';
import NavBar from './NavBar'
import HomePage from './HomePage'
import Plan from './Plan'

const Nav = withRouter((props) => <NavBar {...props}/>);
const Home = () => (
    <div>
        <div>
            <Nav />
        </div>
        <div>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/Home' component={HomePage} />
            <Route exact path='/Plan' component={Plan} />
            {/* <Route exact path='/estimation' component={Estimation} />
            <Route exact path='/store' component={Store} />*/}
        </div>
    </div>
);
export default Home;

import React from 'react'
import { Route } from 'react-router-dom'
import NavBar from './NavBar'
import HomePage from './HomePage'
import Plan from './Plan'


const Home = () => (
    <div>
        <div>
            <NavBar />
        </div>
        <div>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/plan' component={Plan} />
            {/* <Route exact path='/estimation' component={Estimation} />
            <Route exact path='/store' component={Store} />*/}
        </div>
    </div>
);
export default Home;
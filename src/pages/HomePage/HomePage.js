import React, { Component } from 'react';
import Miami from './Miami/Miami';
import Mendoza from '../Mendoza';
import Temecula from '../Temecula/Temecula';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
        <div>
            <Router>
            <Switch>
                <Route />
                <Temecula />
                <Mendoza />
            </Switch>
            </Router>
        </div>
        );
    }
}    

export default HomePage;
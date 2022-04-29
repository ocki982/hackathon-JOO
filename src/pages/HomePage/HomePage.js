import React, { Component } from 'react';
import Hero from '../../components/Hero/Hero';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
        <div>
            <Router>
            <Switch>
                <Hero />
            </Switch>
            </Router>
        </div>
        );
    }
}    

export default HomePage;
import React, { Component } from 'react';
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
        <div>
            <Header/>
            <Router>
            <Switch>
                <Hero />
            </Switch>
            </Router>
            <Footer/>
        </div>
        );
    }
}    

export default HomePage;
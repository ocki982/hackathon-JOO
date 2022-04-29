import React, { Component } from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

class HomePage extends Component {
    render() {
        return (
        <div>
            <Header/>
            <Router>
                <Switch>

                </Switch>
            </Router>
            <Footer/>
        </div>
        );
    }
}    

export default HomePage;
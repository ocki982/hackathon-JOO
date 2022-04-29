import React, { Component } from 'react';
import CommentsForm from '../../components/CommentsForm/CommentsForm';
import DrinkList from '../../components/DrinksList/DrinkList';
import Sidebar from '../../components/Sidebar/Sidebar';
import './DrinkPage.scss'


class DrinkPage extends Component {
    render() {
        return (
            <div>
                <div className="city__flex">
                    <Sidebar/>
                    <div>
                        <DrinkList/>
                        <CommentsForm/>
                    </div>
                </div>
            </div>
        );
    }
}

export default DrinkPage;
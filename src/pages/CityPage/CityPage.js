import React, { Component } from 'react';
import DrinkList from '../../components/DrinksList/DrinkList';
import Sidebar from '../../components/Sidebar/Sidebar';


class CityPage extends Component {
    render() {
        return (
            <div>
                <Sidebar/>
                <DrinkList/>
            </div>
        );
    }
}

export default CityPage;
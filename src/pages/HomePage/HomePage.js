import React, { Component } from 'react';
import Hero from '../../components/Hero/Hero';
import axios from 'axios';

class HomePage extends Component {
state={
    cities:[],
    comments:[],
    drinks:[],
}
componentDidMount() {
    axios.get('http://localhost:8080')
    .then(res => {
        let citiesArray=[]
        res.data.map(city => {
            return citiesArray.push(city.city)
        })
        let comments = res.data;
        let drinks = res.data.drinks;
        this.setState(
            {cities: citiesArray}
        )
    }).catch(error=> console.log(error))
}
render(){
    console.log(this.state.cities)
    return this.state.cities.length === 0 ?
    <p>Loading…</p> :
    (<div>
        <Hero cities={this.state.cities}/>
    </div>)
}
}
export default HomePage;

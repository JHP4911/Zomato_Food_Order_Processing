import React, { Component } from 'react';
import './css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuickSearches from './Quicksearches';
import Wallpaper from './Wallpaper';
import axios from 'axios';
//import meal from '../../../practice-nodejs/models/meal';
//'../../practice-nodejs/models/meal';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            mealtypes: []
        };
    }
    componentDidMount() {
        axios.get('http://localhost:5008/api/getCityList')
            .then(result => {
                console.log(result);
                this.setState({
                    cities: result.data.cities
                });
            }).catch(error => {
                console.log(error);
            });


        axios.get('http://localhost:5008/api/getmealList')
            .then(result => {
                this.setState({
                    mealtypes: result.data.meals
                });
                //console.log(result);
            }).catch(error => {
                console.log(error);
            });

    }
    render() {
        const { cities, mealtypes } = this.state;
        //console.log(mealtypes);
        return (
            <div >
                <Wallpaper cities={cities} />
                <QuickSearches mealtypes={mealtypes} />

            </div>
        );
    }
}

export default Home;
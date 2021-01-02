import React, { Component } from 'react';
import homepageimg from './homepageimg.png';
import './css/home.css';
import axios from 'axios'; //Api call in react
import {withRouter} from 'react-router-dom';


class Wallpaper extends React.Component {
    constructor() {
        super();
        this.state = {
            suggestions : [], //suggestions after filteration in restaurants
            text : '', // user input restaurants
            restaurants : [] //list of restaurants after selection of city
        };
    }

    componentDidMount() {

    }
    handleChange = (event) =>{
        const cityId = event.target.selectedOptions[0].value;
        sessionStorage.setItem("city", cityId);
        axios({
            method : 'GET',
            url : `http://localhost:5008/api//getAllRestaurantsBycity/${cityId}`,
            headers : {'Content-Type' : 'application/json'}
        }).then(result => {
            
            this.setState({
                restaurants : result.data.restaurants
            })
        }).catch(error =>{
            console.log(error);
        });
    }
    onTextChanged = (event)=> {
        //filter the restaurants
        const searchInput = event.target.value;
        
        const {restaurants} = this.state;
        
        let suggestions = [];
        if(searchInput.length > 0 ){
           suggestions = restaurants.filter(
               item => item.name.toLowerCase().includes(searchInput.toLowerCase())
           );
        }
        this.setState({
            suggestions,
            text : searchInput
        });

    }
    selectRestaurant = (item) =>{
      
       //got to restaurant details page
       this.props.history.push(`/details/?id=${item._id}`);
       console.log(`${item._id}`);
       
    }
    renderSuggestions = () =>{
        const {suggestions} = this.state;
        if(suggestions.length == 0) {
            return null;
        }
        return (
            <ul className="suggestionsBox">
                {
                    suggestions.map((item, index) => {
                       return (
                         <li key = {index} onClick = {() => this.selectRestaurant(item)}> {`${item.name}, ${item.city}`} </li>
                       )
                         
                    })
                }
            </ul>
        )
    } 
    render() {
        const { cities } = this.props;
        const {text} = this.state;
        return (
            <React.Fragment>
                <img src={homepageimg} alt="" style={{ width: '100%', height: '450px', margin: 'auto' }} />
                <div>
                    <div className="logo">
                        <p>e!</p>
                    </div>
                    <div className="headings">
                        Find the best restaurants, cafes, bars
                    </div>
                    <div className="locationSelector">
                        <select className="locationDropdown" onChange = {this.handleChange}>
                            <option value="0" selected disabled>Please select a city</option>
                            {
                                cities.map((city,index) => {
                                return <option key={index} value={city.city_id}>{city.name}, {city.country_name}</option>
                                })
                            }
                        </select>
                        <div>
                            <span className="gylphicon glyphicon-search"></span>
                            <input className="restaurantsinput" type="text" value = {text} placeholder=" Search for restaurants" onChange={this.onTextChanged}/>
                            {
                               this.renderSuggestions()
                                
                            }
                        
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(Wallpaper);
import React from 'react';
import axios from 'axios'; //Api call in react
import queryString from 'query-string';
import 'bootstrap/dist/css/bootstrap.min.css';
import './overview.js';
import './css/restaurant.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Users from '../componenets/Users';
import breakfast from './assets/breakfast-l.png';
import Restaurant from './restaurant.js';


class Details extends React.Component {
    constructor() {
        super();
        this.state = {
            restaurant: {}
        };
    }
    componentDidMount() {
        const queryParams = queryString.parse(this.props.location.search);
        const restaurantId = queryParams.id;

        axios(
            {
                method: 'GET',
                url: `http://localhost:5008/api/getRestaurantById/${restaurantId}`,
                headers: { 'Content-Type': 'application/json' }
            }
        ).then(result => {
            this.setState({
                restaurant: result.data.restaurants
            })

        }).catch(error => {
            console.log(error);
        });
    }
    render() {
        const { restaurant } = this.state;
        return (
            <React.Fragment>
                <div className="container">
                    <img src={restaurant.thumb} alt="res img" style={{ height: '352px', width: '1130px', margin: '0' }} />

                    <div className="restaurant">
                        <p className="restaurantHeading">
                            {restaurant.name}
                        </p>
                        <button type="button" className="btn" style={{ position: 'absolute', top: '5%', right: '-200%', color: 'white', backgroundColor: '#ce0505' }}>Place Online Order</button>

                    </div>
                    <Tabs style={{ marginTop: '90px' }}>
                        <TabList>
                            <Tab>Overview</Tab>
                            <Tab>Contact</Tab>
                        </TabList>
                        <TabPanel>
                            <div className="about">About this place</div>
                            <div>
                                <p className="cuisine">Cuisine</p>
                                <p className="bakery">
                                    {
                                       restaurant.Cuisine &&  restaurant.Cuisine.length > 0 ? restaurant.Cuisine.map(item =>{
                                            return <span> { item.name }, </span>
                                        }) : null
                                    }</p>
                            </div>
                            <div>
                                <p className="avgcost">Average Cost</p>
                                <p className="cost">{restaurant.cost}</p>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            
                           
                            <div>
                                <p className="restau-name">{restaurant.name}</p>
                                <p className="address">{restaurant.address}</p>
                            </div>
                        </TabPanel>
                    </Tabs>

                </div>
            </React.Fragment>
        )
    }

}

export default Details;

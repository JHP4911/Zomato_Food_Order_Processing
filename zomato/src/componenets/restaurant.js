import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './overview.js';
import './css/restaurant.css';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Users from '../componenets/Users';
import breakfast from './assets/breakfast-l.png';

class Restaurant extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <img src={breakfast} alt="breakfast" style={{ height: '352px', width: '1130px', margin: '0' }} />

                    <div className="restaurant">
                        <p className="restaurantHeading">
                            The Big Chill Cakery
                         </p>
                         <button type="button" className="btn" style={{ position: 'absolute', top: '5%', right: '-200%',color: 'white', backgroundColor: '#ce0505' }}>Place Online Order</button>
                            
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
                              <p className="bakery">Bakery, Fast-food</p>
                          </div>
                          <div>
                              <p className="avgcost">Average Cost</p>
                              <p className="cost">₹700 for two people (approx.)</p>
                          </div>
                        </TabPanel>
                        <TabPanel>
                            <div>Contact Information</div>
                        </TabPanel>
                    </Tabs>

                </div>
            </div>
        )
    }


}

export default Restaurant;

/*<div>
                        <ul className="nav nav-tabs" style={{ marginTop: '90px' }}>
                            <li className="nav-item">
                                <a className="nav-link active" href={require('./overview.js')}>Overview</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={require('./contact.html')}>Contact</a>
                            </li>
                        </ul>
                    </div>
*/ 
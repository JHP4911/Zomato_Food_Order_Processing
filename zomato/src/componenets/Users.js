
import React, {Component} from 'react';
import User from './User';
class Users extends React.Component{

     constructor(){

        super ();

         this.state = {
             users: [
                {
                    name : "Akanksha",
                    age :  21
                },

                {
                    name : "Astha",
                    age :  21
                },
                {
                    name : "Asha",
                    age :  21
                }
                
             ],
             count : 0
                
             }
         }
         componentDidMount()
         {
             //make api calls on load of a page
         }

         
         increaseCount = () =>{
            
             this.setState({
                 count : this.state.count + 1
             })
         }
     
    render(){
        return(
          <div>
              <h1>{this.props.title}</h1>
              <h1>{this.state.count}</h1>
              
              <button onClick = {this.increaseCount}>Increase Count</button>
              <User name = "Akanksha" age = "21"/>
              <User name = "Astha" age = "22" />
              <User name = "Asha" age ="34" />
       
          </div>
        )
    }
}

export default Users;
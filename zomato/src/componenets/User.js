import React from 'react';

const User = (props) =>{
    return (
      <div className = "user">{props.name}, {props.age}</div>
    )
}

export default User;
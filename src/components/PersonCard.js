import React, { Component } from 'react';
    
    
class PersonCard extends Component {
    render() {
        return (
        <div className="m-3 p-3 bg-light border b-dark"> 
            <div>
               <h1> {this.props.lastName}, {this.props.firstName} </h1>
               <p> Age: {this.props.age} </p>
               <p> Hair Color: {this.props.hairColor} </p>
            </div>
        </div>
        
        );
    }
}
    
export default PersonCard;
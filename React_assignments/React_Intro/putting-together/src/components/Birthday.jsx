import React, { Component } from 'react';

class Birthday extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Age: this.props.age
        };
    }
    birth_day = () => {
     
            this.setState({ Age: this.state.Age + 1});
      
    }
    render(){
      
        return (
            <>
                <h1>{this.props.firstName}, {this.props.lastName}</h1>
                <p>Age: {this.state.Age}</p>
                <p>Hiar  Color: {this.props.hair_color}</p>
               
                <button onClick={ this.birth_day }>Birthday Button for {this.props.firstName} {this.props.lastName} </button>




            </>
        )
    }
}
                
export default Birthday;
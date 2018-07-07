import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Wizard extends Component {
    
    state = {
        id: '',
        name: '',
        address: '',
        city: '',
        state: '',
        zip:'',

    }


render(){
        return( 
           <div>
            Name<input 
                name="name"
                value={this.state.name}
                type="text" 
                onChange={this.handleChange}
            />
              Address<input
                name="address"
                value={this.state.address}
                type="text"
                onChange={this.handleChange}
            />
              City<input
                name="city"
                value={this.state.city}
                type="text" 
                onChange={this.handleChange}
            />
              State <input 
              name="state"
              value={this.state.state}
              type="text" 
              onChange={this.handleChange}
            />
              Zip <input 
                name="zip"
                value={this.state.zip}
                type="number" 
                onChange={this.handleChange}
            />


               <Link to="/" className='links'><button>Cancel</button></Link> 
           </div>
        )
    }
    
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
      }
}



export default Wizard
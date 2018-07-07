import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';

class Dashboard extends Component {

    state= {
        houses:[]
    }


    render(){
        const houses = this.state.houses.map((house, i) => (<House {...house}/>))
        return( 
            <div>
                Dashboard
                <Link to="/wizard" className='links'><button>Add New Property</button></Link> 
                <House/>
            </div>

        )
    }
}



export default Dashboard;
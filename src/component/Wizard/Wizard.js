import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

// methods
//     handle input change
//     post new house to database 

class Wizard extends Component {

    constructor(){
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            houseState: '',
            zip: 0
        }
        this.createHouse = this.createHouse.bind(this)
    }

    createHouse(){
        let newHouse = {
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            houseState: this.state.houseState,
            zip: this.state.zip
        }
        axios.post('/api/houses', newHouse)
        .then(res => {
            console.log(res.data)
            this.setState({
                houses: res.data
            })
        })
    }

    render() {
        return (
            <div>
                <h3>Wizard</h3>


                <span>Property Name</span>
                <input onChange={(event) => this.setState({name: event.target.value})} value={this.state.name} type='text'/>
                
                <span>Address</span>
                <input onChange={(event) => this.setState({address: event.target.value})} value={this.state.address} type='text'/>
                
                <span>City</span>
                <input onChange={(event) => this.setState({city: event.target.value})} value={this.state.city} type='text'/>
                
                <span>State</span>
                <input onChange={(event) => this.setState({houseState: event.target.value})} value={this.state.houseState} type='text'/>
                
                <span>Zip</span>
                <input onChange={(event) => this.setState({zip: event.target.value})} value={this.state.zip} type='text'/>
                
                <Link to={`../`}><button onClick={this.createHouse}>Complete</button></Link>

                <Link to={`../`} ><button>Cancel</button></Link>
            </div>
        )
    
  }
}

export default Wizard;

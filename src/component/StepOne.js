import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'

class StepOne extends Component {
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
                <input onChange={(event) => this.setState({name: event.target.value})} type='text'/>

                <br />

                <span>Address</span>
                <input onChange={(event) => this.setState({address: event.target.value})}  type='text'/>

                <br />

                <span>City</span>
                <input onChange={(event) => this.setState({city: event.target.value})} type='text'/>

                <br />

                <span>State</span>
                <input onChange={(event) => this.setState({houseState: event.target.value})} type='text'/>

                <br />

                <span>Zip</span>
                <input onChange={(event) => this.setState({zip: event.target.value})}  type='text'/>
                
                <br />

                <Link to={`../`}><button onClick={this.createHouse}>Complete</button></Link>

                <Link to={`../wizard/step2`} ><button>Next Step</button></Link>

            </div>
        )
    
  }
}

function mapStateToProps(state){
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        houseState: state.houseState,
        zip: state.zip
    }
}

export default StepOne;
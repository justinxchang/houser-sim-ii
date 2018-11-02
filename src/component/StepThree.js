import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

class StepThree extends Component {

    constructor(){
        super()

        this.state = {
            mortgage: 0,
            rent: 0,
        }
    }

    render() {
        return (
            <div>
                <h3>Wizard</h3>


                <span>Monthly Mortgage Amount</span>
                <input onChange={(event) => this.setState({mortgage: event.target.value})} value={this.state.image} type='number'/>

                <br />

                <span>Desired Monthly Rent</span>
                <input onChange={(event) => this.setState({rent: event.target.value})} value={this.state.image} type='number'/>

                <br />

                <Link to={`../wizard/step2`} ><button>Previous Step</button></Link>

                <Link to={`../`}><button onClick={this.createHouse}>Complete</button></Link>

            </div>
        )
    
  }
}

export default StepThree;
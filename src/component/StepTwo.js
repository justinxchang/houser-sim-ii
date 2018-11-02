import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

class StepTwo extends Component {

    constructor(){
        super()

        this.state = {
            img: '',
        }
    }

    render() {
        return (
            <div>
                <h3>Wizard</h3>


                <span>Image URL</span>
                <input onChange={(event) => this.setState({image: event.target.value})} value={this.state.image} type='text'/>
                
                <br />

                <Link to={`../wizard/step1`} ><button>Previous Step</button></Link>
                <Link to={`../wizard/step3`} ><button>Next Step</button></Link>
            </div>
        )
    
  }
}

export default StepTwo;
import React, { Component } from 'react';
import House from '../House/House'
import {Link} from 'react-router-dom'
import Wizard from '../Wizard/Wizard'
import axios from 'axios'

class Dashboard extends Component {

    constructor(props){
        super(props)

        this.state = {
            houses: []
        }
        this.deleteHouse = this.deleteHouse.bind(this)
    }

    componentDidMount(){
        axios.get('/api/houses')
        .then(res => {
            this.setState({
                houses: res.data
            })
        })
    }

    deleteHouse(id){
        axios.delete(`/api/houses/${id}`)
        .then(res => {
            this.setState({
                houses: res.data
            })
        })
    }


    render() {
        console.log(this.state.houses)
        let displayedHouses = this.state.houses.map((house, i) => {
            return <House key={i} name={house.name} address={house.address} city={house.city} state={house.state} zip={house.zip} id={house.id} deleteHouse={this.deleteHouse} />
        })
        return (
            <div>
                <p>Dashboard</p>
                <Link to={`../Wizard/Step1`} ><button>Add New Property!</button></Link>
                {displayedHouses}
            </div>
        )
    
    }
}

export default Dashboard;

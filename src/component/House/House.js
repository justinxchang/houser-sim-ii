import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'

// no state
// no methods

function House (props){
    return (
        <div>
            {props.name}
            {props.address}
            {props.city}
            {props.state}
            {props.zip}
            <button onClick={() => props.deleteHouse(props.id)}>Delete</button>
        </div>
    )
}

export default House
    
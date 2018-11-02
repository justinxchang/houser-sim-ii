import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Dashboard from '../src/component/Dashboard/Dashboard'
import Wizard from '../src/component/Wizard/Wizard';


export default(
    <Switch>
        <Route component={Dashboard} exact path='/'/>
        <Route component={Wizard} path='/wizard'/>
    </Switch>
)
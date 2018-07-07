import {Switch, Route} from 'react-router-dom';
import Dashboard from '../src/components/Dashboard/Dashboard'
import Wizard from '../src/components/Wizard/Wizard'
import React from 'react';


export default (
    <Switch>
      <Route component={ Dashboard } exact path="/" />
      <Route component={ Wizard } path="/wizard" />
    </Switch>
  )
import { Switch, Route } from 'react-router-dom';
import React from 'react';
import App  from './App';
import Big from './modal';
import Login from './authGard';





const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route exact path='/modal' component={Big}/>
      <Route exact path='/login' component={Login}/>
    </Switch>
  </main>
)

export default Routes;

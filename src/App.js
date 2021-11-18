import React, { Component } from 'react'

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from './Components/Nav';
import Home from './Pages/Home';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';

class App extends Component {
  render() {
    return (      
    <BrowserRouter>
    
    <Nav/>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login}/>
        <Route path="*" component={NotFound} />
    </Switch>
    </BrowserRouter>

    )
  }
}

export default App


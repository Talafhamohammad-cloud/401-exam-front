import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Favorite from './components/Favorite'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
class App extends Component {
  render() {
     return(
      <>
      <Header/>
      <BrowserRouter>
          <Switch>
            <Route exact path="/"></Route>
            <Main/>
            <Router/>
            < Route exact path = "/Favorite" > </Route>
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

export default App;
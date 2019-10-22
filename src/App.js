import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import AllBeers from "./pages/AllBeers"
import RandomBeer from "./pages/RandomBeer"
import NewBeer from "./pages/NewBeer"
import Home from "./pages/components/Home"
import BeerDetail from "./pages/BeerDetail"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Logout from "./pages/Logout"
import Nav from "./pages/components/Nav"
import { Link, Route } from "react-router-dom"
require("dotenv").config();


class App extends Component {

  state = {
    beers: [],
    error: null,
    user: {},
  }

  componentDidMount() {
    debugger
    axios
      .get("https://ih-beers-api.herokuapp.com/beers")
      .then(response => {
        this.setState({ beers: response.data })
      })
      .catch(error => {
        this.setState({ error: error.message })
      })
  }

  render() {
    return (
      <div className="App">
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" render={(props) => <NewBeer {...props} beers={this.state.beers} />} />
          <Route exact path="/beers" render={(props) => <AllBeers {...props} beers={this.state.beers} />} />
          <Route path="/beers/:beerId" component={BeerDetail} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/logout" component={Logout} />
        </div>
      </div>
    );
  }
}

export default App;

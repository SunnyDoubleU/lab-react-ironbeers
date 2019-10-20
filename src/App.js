import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import AllBeers from "./pages/AllBeers"
import RandomBeer from "./pages/RandomBeer"
import NewBeer from "./pages/NewBeer"
import Home from "./pages/Home"
import BeerDetail from "./pages/BeerDetail"
import { Link, Route } from "react-router-dom"


class App extends Component {

  state = {
    beers: [],
    error: null
  }

  componentDidMount() {
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
        <header>
          <Link to={`/`}>Home</Link>
        </header>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" render={(props) => <NewBeer {...props} beers={this.state.beers} />} />
          <Route exact path="/beers" render={(props) => <AllBeers {...props} beers={this.state.beers} />} />
          <Route path="/beers/:beerId" render={(props) => <BeerDetail {...props} beers={this.state.beers} />} />
        </div>
      </div>
    );
  }
}

export default App;

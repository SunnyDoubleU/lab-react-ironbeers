import React, { Component } from 'react'
import axios from 'axios';
import "./Random.scss"
import Nav from "./components/Nav"

class RandomBeer extends Component {

    state = {
        randomBeer: []
    }

    componentDidMount() {
        axios
            .get("https://ih-beers-api.herokuapp.com/beers/random")
            .then(response => {
                this.setState({ randomBeer: response.data })
            })
            .catch(error => {
                this.setState({ error: error.message })
            })
    }

    render() {
        return (
            <>
                <Nav />
                <div className="Random">
                    <img src={this.state.randomBeer.image_url} alt="beer" />
                    <div>
                        <h1>{this.state.randomBeer.name}</h1>
                        <p>{this.state.randomBeer.tagline}</p>
                        <p>{this.state.randomBeer.description}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default RandomBeer;
import React, { Component } from 'react'
import "./AllBeers.scss"
import axios from 'axios'

class BeerDetail extends Component {

    state = {
        beer: {}
    }

    componentDidMount() {
        var beerId = this.props.match.params.beerId

        axios({
            url: `https://ih-beers-api.herokuapp.com/beers/${beerId}`,
            method: "GET"
        })
            .then((res) => {
                var stateStringify = JSON.stringify(this.state);
                var stateCopy = JSON.parse(stateStringify);

                stateCopy.beer = res.data;
                stateCopy.loading = false;
                this.setState(stateCopy);
            })
            .catch((err) => {
                var stateStringify = JSON.stringify(this.state);
                var stateCopy = JSON.parse(stateStringify);

                stateCopy.err = err.message;
                this.setState(stateCopy);
            })

    }

    render() {
        return (
            <fragment>
                {this.state.loading ?
                    <h1>Loading</h1> :
                    <div className="BeerDetail">
                        <img src={this.state.beer.image_url} alt="beer" />
                        <h1>{this.state.beer.name}</h1>
                        <p>{this.state.beer.tagline}</p>
                        <p>{this.state.beer.description}</p>
                        <p>{this.state.beer.contributed_by}</p>
                    </div>
                }
            </fragment>
        )
    }
}


export default BeerDetail;

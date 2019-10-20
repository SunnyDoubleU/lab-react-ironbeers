import React from 'react'
import "./AllBeers.scss"



const BeerDetail = (props) => {

    var beerDetail = props.match.params.beerId
    var filteredBeer = props.beers.filter((beer) => beer._id === beerDetail)[0]

    return (
        <fragment>
            {props.beers.length > 0 ?
                <div className="BeerDetail">
                    <img src={filteredBeer.image_url} alt="beer" />
                    <h1>{filteredBeer.name}</h1>
                    <p>{filteredBeer.tagline}</p>
                    <p>{filteredBeer.description}</p>
                    <p>{filteredBeer.contributed_by}</p>
                </div>
                :
                <h1>Loading</h1>
            }
        </fragment>
    )
}


export default BeerDetail;

import React from 'react'
import "./AllBeers.scss"
import { Link } from "react-router-dom"
import Nav from "./components/Nav"

const AllBeers = (props) => {

    return (
        <>
            <Nav />
            <div className="AllBeers" >
                {console.log(props.beers)}
                {props.beers.map((beer) =>
                    <Link to={`/beers/${beer._id}`}>
                        <div className="AllBox">
                            <img src={beer.image_url} alt="beer" />
                            <div>
                                <div>
                                    <h3>{beer.name}</h3>
                                    <p>{beer.tagline}</p>
                                    <p>Created by: {beer.contributed_by}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
                }
            </div>
        </>
    )
}



export default AllBeers;
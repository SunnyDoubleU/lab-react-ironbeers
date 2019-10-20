import React from "react";

import { Link } from "react-router-dom"


const Home = () => {

    return (
        <div>
            <Link to={`/beers`}>All</Link>
            <Link to={`/random-beer`}>Random</Link>
            <Link to={`/new-beer`}>New</Link>
        </div>
    )

}

export default Home;
import React from "react";
import "./Home.scss"
import showAll from "../../images/showall"
import random from "../../images/random"
import newbeer from "../../images/addnew"
import Nav from "../components/Nav"

import { Link } from "react-router-dom"


const Home = () => {

    return (
        <>
            <Nav />
            <div className="Home">
                <Link to={`/beers`}>
                    <img src={showAll} alt="img" />
                </Link>
                <Link to={`/random-beer`}>
                    <img src={random} alt="img" />
                </Link>
                <Link to={`/new-beer`}>
                    <img src={newbeer} alt="img" />
                </Link>
            </div>
        </>
    )
}

export default Home;
import React, { Component } from 'react'
import axios from "axios"

const Logout = () => {
    this.componentDidMount = () => {
        axios
            .get("https://ih-beers-api.herokuapp.com/auth/logout")
            .then((res) => {
                this.props.history.push(`/`)
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
        </>
    )
}

export default Logout;
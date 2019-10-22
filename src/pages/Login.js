import React, { Component } from 'react'
import axios from "axios"
import qs from "qs"
import { login } from "./utils/auth"


export default class Login extends Component {
    constructor() {
        super()

        this.state = {
            username: "",
            password: "",
        }

        this.handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        this.handleFormSubmit = (event) => {
            event.preventDefault();
            login(this.state.username, this.state.password)
                .then(() => {
                    this.props.history.push(`/`)
                })


            //     axios({
            //         url: "https://ih-beers-api.herokuapp.com/auth/login",
            //         data: qs.stringify(this.state),
            //         method: "POST",
            //         headers: { 'content-type': 'application/x-www-form-urlencoded' }
            //     })
            //         .then((res) => {
            //             console.log(process.env.REACT_APP_API)
            //             localStorage.setItem('user', JSON.stringify(res.data))
            //             this.props.history.push(`/`)
            //             debugger
            //         })
            //         .catch((err) => {
            //             console.log(err)
            //         })

        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Name:</label>
                    <input required type="text" name="username" value={this.state.username} onChange={(e) => this.handleChange(e)} />

                    <label>Password</label>
                    <input required minlength="8" type="password" name="password" value={this.state.password} onChange={(e) => this.handleChange(e)} />

                    <button type="submit" value="Submit">Submit</button>
                </form>
            </div>
        )
    }
}

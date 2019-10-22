import React, { Component } from 'react'
import axios from "axios"
import qs from "qs"
import { signup } from "./utils/auth"

export default class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            firstname: "",
            lastname: "",
            email: "",
            password: ""
        }

        this.handleSubmit = (event) => {
            event.preventDefault();
            signup(this.state)
            this.props.history.push(`/login`)

        }

        this.handleChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input required type="text" name="username" value={this.state.username} onChange={(e) => this.handleChange(e)} />

                    <label>Password (Minimum eight characters, at least one letter and one number.)</label>
                    <input required minlength="8" type="password" name="password" value={this.state.password} onChange={(e) => this.handleChange(e)} />

                    <label>Firstname</label>
                    <input required type="text" name="firstname" value={this.state.firstname} onChange={(e) => this.handleChange(e)} />

                    <label>Lastname</label>
                    <input required type="text" name="lastname" value={this.state.lastname} onChange={(e) => this.handleChange(e)} />

                    <label>Email</label>
                    <input required type="text" name="email" value={this.state.email} onChange={(e) => this.handleChange(e)} />

                    <button type="submit" value="Submit">Submit</button>
                </form>

            </div>
        )
    }
}

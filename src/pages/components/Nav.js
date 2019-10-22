import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { logout, getUser } from "../utils/auth"
import { withRouter } from "react-router"
import "./Nav.scss"

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: getUser()
        }
        this.logoutUser = this.logoutUser.bind(this)
    }

    logoutUser() {
        logout()
            .then(() => {
                this.setState({ user: null });
                this.props.history.push(`/`)
            })
    }

    render() {
        return (
            <div className="NavBar">
                {
                    this.state.user ?
                        <>
                            <Link to={`/`}>Home</Link>
                            <p>Hi {this.state.user.firstname}</p>
                            <p onClick={this.logoutUser}>Log Out</p>
                        </> :
                        <>
                            <Link to={`/`}>Home</Link>
                            <Link to={`/login`}>Login</Link>
                            <Link to={`/signup`}>Sign Up</Link>
                        </>
                }
            </div>
        )
    }
}

export default withRouter(Nav);
import React, { Component } from 'react'
import axios from 'axios';
import Nav from "./components/Nav"


class NewBeer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            brewers_tips: "",
            attenuation_level: "",
            contributed_by: ""
        }

        this.handleFormSubmit = (event) => {
            event.preventDefault();
            axios({
                url: "https://ih-beers-api.herokuapp.com/beers/new",
                data: this.state,
                method: "POST"
            })
                .then(res => {
                    this.props.history.push(`/beers/${res.data._id}`)
                    debugger
                })
                .catch(err => {
                    console.log(err)
                })
        }

        this.handleChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    }

    render() {
        return (
            <>
                <Nav />
                <div>
                    <form onSubmit={this.handleFormSubmit}>
                        <label>Name</label>
                        <input required type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />

                        <label>Tagline</label>
                        <input required type="text" name="tagline" value={this.state.tagline} onChange={(e) => this.handleChange(e)} />

                        <label>Description</label>
                        <input required type="text" name="description" value={this.state.description} onChange={(e) => this.handleChange(e)} />

                        <label>First Brewed</label>
                        <input required type="date" name="first_brewed" value={this.state.first_brewed} onChange={(e) => this.handleChange(e)} />

                        <label>Brewer's Tips</label>
                        <input required type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={(e) => this.handleChange(e)} />

                        <label>Attenuation Level</label>
                        <input required type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={(e) => this.handleChange(e)} />

                        <label>Created By</label>
                        <input required type="text" name="contributed_by" value={this.state.contributed_by} onChange={(e) => this.handleChange(e)} />

                        <button type="submit" value="Submit">Submit</button>
                    </form>
                </div >
            </>
        )
    }
}

export default NewBeer;
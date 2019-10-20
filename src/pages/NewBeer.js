import React, { Component } from 'react'
import axios from 'axios';

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
            axios.post('https://ih-beers-api.herokuapp.com/beers/new', {
                name: this.state.name,
                tagline: this.state.tagline,
                description: this.state.description,
                first_brewed: this.state.first_brewed,
                brewers_tips: this.state.brewers_tips,
                attenuation_level: this.state.attenuation_level,
                contributed_by: this.state.contributed_by
            })
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err)
                })
        }

        this.handleNameInput = (event) => {
            this.setState({
                name: event.target.value
            })
        }

        this.handleTaglineInput = (event) => {
            this.setState({
                tagline: event.target.value
            })
        }

        this.handleDescriptionInput = (event) => {
            this.setState({
                description: event.target.value
            })
        }

        this.handleFirstBrewInput = (event) => {
            this.setState({
                first_brewed: event.target.value
            })
        }

        this.handleTipsInput = (event) => {
            this.setState({
                brewers_tips: event.target.value
            })
        }

        this.handleAttenuationInput = (event) => {
            this.setState({
                attenuation_level: event.target.value
            })
        }

        this.handleContributionInput = (event) => {
            this.setState({
                contributed_by: event.target.value
            })
        }

    }



    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleNameInput(e)} />

                    <label>Tagline</label>
                    <input type="text" name="tagline" value={this.state.tagline} onChange={(e) => this.handleTaglineInput(e)} />

                    <label>Description</label>
                    <input type="text" name="description" value={this.state.description} onChange={(e) => this.handleDescriptionInput(e)} />

                    <label>First Brewed</label>
                    <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={(e) => this.handleFirstBrewInput(e)} />

                    <label>Brewer's Tips</label>
                    <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={(e) => this.handleTipsInput(e)} />

                    <label>Attenuation Level</label>
                    <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={(e) => this.handleAttenuationInput(e)} />

                    <label>Created By</label>
                    <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={(e) => this.handleContributionInput(e)} />

                    <input type="submit" value="Submit" />
                </form>
            </div >
        )
    }
}

export default NewBeer;
// Code SimpleComponent Here
import React, { Component } from 'react';

export default class SimpleComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            mood : "happy"
        }
    }

    handleClick = () => {
        let newMood;
        this.state.mood === "happy"
        ? newMood = "sad"
        : newMood = "happy"
        this.setState({
            mood : newMood
        })
    }

    render() {
        return( 
            <div id="simple-component" onClick={this.handleClick}>
               {this.state.mood}
            </div>
        )
    }
}
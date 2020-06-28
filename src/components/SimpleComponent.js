import React from 'react'

export default class SimpleComponent extends React.Component {
    state = {
    mood: "happy"
    }

    onClick = () => {
        this.state.mood === "happy" ? this.setState({mood: "sad"}) : this.setState({mood: "happy"})
    }

  render() {
    return (
      <div onClick={this.onClick}>
          {this.state.mood}
      </div>
    )
  }
}

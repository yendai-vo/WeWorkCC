import React, { Component } from 'react'

export default class DeckCard extends Component {
  
  render() {
    return (
      <div>
        <h1>hello</h1>
        <h2>{this.props.cards}</h2>
      </div>
    )
  }
}

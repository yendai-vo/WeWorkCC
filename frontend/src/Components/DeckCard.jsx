import React, { Component } from 'react';
import '../card.css';

export default class DeckCard extends Component {

  render() {
    return (
      <div>
        <div className={`${this.props.suit} card`}>
          <div className="left">
            {this.props.cardType}
            <p>{this.props.suit}</p>
          </div>

          <div className="mid">
            {this.props.suit}
          </div>

          <div className="right">
            {this.props.cardType}
            <p>{this.props.suit}</p>
          </div>

        </div> {/* className= "card" */}
      </div>
    )
  }
}

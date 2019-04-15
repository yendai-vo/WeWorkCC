import React, { Component } from 'react';
import '../card.css';

export default class DeckCard extends Component {

  render() {
    return (
      <div>
        <div className="card">
          <div className={this.props.suit}>
              {this.props.cardType} 
              <p>{this.props.suit}</p>
          </div>
       
          
          <div className={this.props.suit}>
            <div className="bottomright">
              {this.props.cardType} 
              <p>{this.props.suit}</p>
            </div>
          </div>
        
          
        </div>
      </div>
    )
  }
}

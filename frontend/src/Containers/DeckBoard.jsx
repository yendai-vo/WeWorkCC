import React, { Component } from 'react';
import DeckCard from '../Components/DeckCard';
import '../board.css';

export default class DeckBoard extends Component {
  state = {
    deckId: '',
    cards: []
  }

  componentDidMount() {
    this.createDeck()
  }

  createDeck = (myDeck) => {
    fetch('http://localhost:3000/decks', {
      method:'POST',
      body: JSON.stringify(myDeck)
    })
    .then(res => res.json())
    .then(deck => {
      console.log(deck)
      this.setState({
        deckId: deck.id
      })
    })
  }

  handleCreateClick = (e) => {
    e.preventDefault();
    console.log('create deck was clicked')
    // this.createDeck();
  }

  drawCards = (myCards) => {
    fetch(`http://localhost:3000/decks/${this.state.deckId}/draw`, {
      method: 'POST',
      body: JSON.stringify(myCards)
    })
    .then(res => res.json())
    .then(cards => {
      console.log(cards)
      this.setState({
        cards: cards
      })
    })
  }

  handleDrawClick = (e) => {
    e.preventDefault();
    this.drawCards();
  }

  render() {
    return (
      <div>
      <button type="button" class="btn btn-info" onClick={this.handleCreateClick}>Create Deck</button>
        <button type="button" class="btn btn-warning" onClick={this.handleDrawClick}>Draw</button>
        <div class="flex-container">
          <div class="flex-box"> 1 </div>
          <div class="flex-box"> 2 </div>
          <div class="flex-box"> 3 </div>
          <div class="flex-box"> 4 </div>
          <div class="flex-box"> 5 </div>
        </div>
        <DeckCard />
      </div>
    )
  }
}

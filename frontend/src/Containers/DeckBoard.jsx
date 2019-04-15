import React, { Component } from 'react';
import DeckCard from '../Components/DeckCard';
import '../board.css';

export default class DeckBoard extends Component {
  state = {
    deckId: '',
    cards: [],
    startedDrawingCards: false,
    newDeck: false,
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
      //console.log(deck)
      this.setState({
        deckId: deck.id,
        newDeck: true
      })
    })
  }

  handleCreateClick = (e) => {
    e.preventDefault();
    this.createDeck();
    this.openModal();
  }

  openModal = () => {

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
    this.setState ({
      startedDrawingCards: true
    })
  }

  cardMap = () => {
    if (this.state.cards && this.state.cards.length) {
      return this.state.cards.map(item => (
        <DeckCard 
          suit={item.suit}
          cardType={item.card_type} 
          id={item.id}
        />
      ))
    } else if (this.state.startedDrawingCards === true) {
      return "Deck is Empty";
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="container">
        <div className="theButtons">
          <button type="button" className="btn-lg btn btn-info" data-toggle="modal" onClick={this.handleCreateClick}>Create Deck</button>

          <button type="button" className="btn-lg btn btn-warning" onClick={this.handleDrawClick}>Draw</button>
        </div>

        <div className="flex-container">
          {this.cardMap()}
        </div>
        <div>
          <div className="modal">
            <div className="modal-body">Deck Created</div>
          </div>
        </div>
      </div>
    )
  }
}

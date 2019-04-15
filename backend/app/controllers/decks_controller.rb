class DecksController < ApplicationController
    before_action :set_deck, only: [:show, :draw]

    # GET /decks
    def index
        @decks = Deck.all
        render json: @decks
    end

    # GET /decks/:id
    def show
        render json: @deck.cards
    end

    # Post /decks
    def create 
        @deck = Deck.create({});
        4.times do |suitIndex|
            suit = Card.SUITS[suitIndex]
        
            13.times do |typeIndex|
                type = Card.TYPES[typeIndex]
        
                @deck.cards.create(
                    suit: suit,
                    card_type: type
                )
            end
        end
        # @deck.save
        # shuffled_cards= @deck.cards.shuffle
        # shuffled_cards.each_with_index do |card, index|
        #     card.position = index
        #     card.save
        # end
        # @deck.cards.order('position ASC')
        # render json: @deck, include: 'cards'
        render json: @deck, include: 'cards'
    end

    def draw
        cards = []
        if (@deck.cards.size > 5)
            # byebug
            # card = @deck.cards.to_a.shuffle.pop
            shuffled_cards = @deck.cards.to_a.shuffle
            5.times {cards.push(shuffled_cards.pop)}
            # Card.find(card.id).destroy
            cards.each { |card|  Card.find(card.id).destroy }
            render json: cards
        elsif (@deck.cards.size > 0) 

            shuffled_cards = @deck.cards.to_a.shuffle
            shuffled_cards.length.times {cards.push(shuffled_cards.pop)}
            cards.each { |card|  Card.find(card.id).destroy }
            render json: cards
        else 
            render json: []
        end
    end

    # Update /decks/:id/shuffle
    # def shuffle
    #     @deck.cards.shuffle!
        # @deck.save
    #     render json: @deck, include: 'cards'
    # end

    private

    def set_deck
        @deck = Deck.find(params[:id])
    end
    
    # def deck_params
    #     params.permit()
    # end
end
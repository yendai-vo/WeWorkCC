# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# SUITS = ['spades', 'clubs', 'diamonds', 'hearts']
# TYPES = ['2', '3', '4','5','6','7','8','9','10','J','Q','K','A']


deck = Deck.create({});

# 52.times do |index| 
#     Deck.cards.create({
#         suit: 
#         type: 
#     })
# end

4.times do |suitIndex|
    suit = Card.SUITS[suitIndex]

    13.times do |typeIndex|
        type = Card.TYPES[typeIndex]

        deck.cards.create(
            suit: suit,
            card_type: type
        )
    end
end

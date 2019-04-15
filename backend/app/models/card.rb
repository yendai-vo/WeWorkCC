class Card < ApplicationRecord
    def self.SUITS
        ['♠', '♣', '♦', '♥']
    end
    def self.TYPES
        ['2', '3', '4','5','6','7','8','9','10','J','Q','K','A']
    end
    belongs_to :deck
end

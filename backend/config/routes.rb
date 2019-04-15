Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :decks do
    resource :card
  end

  #put 'decks/:id/shuffle' => 'decks#shuffle'
  post 'decks/new' => 'decks#create'
  post 'decks/:id/draw' => 'decks#draw'
end

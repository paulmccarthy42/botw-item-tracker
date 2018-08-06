Rails.application.routes.draw do
  resources :players
  resources :armors
  resources :items

    post 'players/piece_manager' => 'players#piece_manager'
end

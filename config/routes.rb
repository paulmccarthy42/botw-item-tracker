Rails.application.routes.draw do
  resources :players
  resources :armors
  resources :armor_pieces
  resources :items
  resources :level_up_items

  post 'players/piece_manager' => 'players#piece_manager'
end

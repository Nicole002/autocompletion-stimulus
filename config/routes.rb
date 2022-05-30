Rails.application.routes.draw do
  resources :users
  root 'users#index'
  get '/autocomplete', to: 'users#autocomplete'
end

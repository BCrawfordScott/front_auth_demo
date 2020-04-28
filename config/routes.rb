Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'root#root'
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :index] 
    resource :authentications, only: [:create]

    get "/users/current", to: 'users#current'
  end
end

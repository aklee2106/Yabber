Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create]
    resource :session, only: [:new, :create, :destroy]
    
    resources :posts do
      resources :likes, only: [:create, :destroy]  
    end 
    
    resources :groups 
  end

  root "static_pages#root"
end

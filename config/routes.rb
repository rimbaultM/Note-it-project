Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users do
    resources :notegroups
  end

  resources :notegroups do
    resources :notes
    resources :members do
        patch 'accept'
        patch 'decline'
    end
  end

end

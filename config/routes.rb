Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :movies
      resources :lists do
        resources :bookmarks, only: [:index, :new, :create]
      end
      resources :lists, only: [:destroy]
    end
  end
end

Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
   resources :physicians, only: [:index] do 
    resources :appointments, only: [:index]
   end

   resources :appointments, only: [:create,:destroy]
  end
end

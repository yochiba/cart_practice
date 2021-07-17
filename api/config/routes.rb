# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api, format: :json do
    namespace :v1 do
      mount_devise_token_auth_for 'Account', at: 'auth', controllers: {
        registrations: 'api/v1/auth/registrations',
        sessions: 'api/v1/auth/sessions'
      }
      resources :accounts, only: [:index, :show]
      resources :products
      resources :categories
      resources :purchase_histories
      resources :purchase_products
      resources :deliveries
    end
  end
end

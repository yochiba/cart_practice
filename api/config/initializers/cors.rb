# frozen_string_literal: true

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins Rails.application.config.x.cors_allowed_origins

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      expose: ['access-token', 'expiry', 'token-type', 'uid', 'client'],
      credentials: true
  end
end

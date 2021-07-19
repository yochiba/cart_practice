# frozen_string_literal: true

require 'rails_helper'

RSpec.describe "Api::V1::Products", type: :request do
  let(:products) { FactoryBot.create(:products) }

  context 'GET /api/v1/products' do
    before { get api_v1_products_path }
    it { expect(response).to have_http_status 200 }
  end

  context 'GET /api/v1/products/:id' do
    before { get "/api/v1/products/#{products.first.id}" }
    it { expect(response).to have_http_status 200 }
  end
end

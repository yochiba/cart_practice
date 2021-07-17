# frozen_string_literal: true

class Api::V1::PurchaseHistoriesController < ApplicationController
  before_action :set_purchase_history, only: :show

  # GET /api/v1/purchase_histories
  def index
    response = PurchaseHistory.all
    render json: response
  end

  # GET /api/v1/purchase_histories/:id
  def show
    render json: @purchase_history
  end

  # POST /api/v1/purchase_histories
  def create
    
  end

  private

  def set_purchase_history
    @purchase_history = PurchaseHistory.find(params[:id])
  end
end

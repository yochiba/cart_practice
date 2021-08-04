# frozen_string_literal: true

class Api::V1::PurchaseHistoriesController < ApplicationController
  before_action :set_purchase_history, only: :show
  before_action :create_params, only: :create

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
    response = PurchaseHistory.generate_purchase_history(params)
    render json: response
  end

  private

  def set_purchase_history
    @purchase_history ||= PurchaseHistory.find(params[:id])
  end

  def create_params
    params.require(:purchase_history).permit(:payment_type, :payment_status, :delivery_type, :delivery_status, :message, :total_price)
  end
end

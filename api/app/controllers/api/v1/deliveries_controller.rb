# frozen_string_literal: true

class Api::V1::DeliveriesController < ApplicationController
  before_action :set_purchase_puroduct, only: :show
  before_action :create_params, only: :create

  # GET /api/v1/purchase_puroducts
  def index
    response = PurchaseProduct.all
    render json: response
  end

  # GET /api/v1/purchase_puroducts/:id
  def show
    render json: @purchase_history
  end

  # POST /api/v1/purchase_puroducts/
  def create
    response = Delivery.generate_delivery(params)
    render json: response
  end

  private

  def set_purchase_puroduct
    @purchase_history ||= PurchaseProduct.find(params[:id])
  end

  def create_params
    params.require(:delivery).permit(:firstname, :lastname, :email, :phone, :zip, :address_one, :address_two, :address_three)
  end
end

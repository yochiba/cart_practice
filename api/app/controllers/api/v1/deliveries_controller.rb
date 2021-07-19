# frozen_string_literal: true

class Api::V1::DeliveriesController < ApplicationController
  before_action :set_purchase_puroduct, only: :show

  # GET /api/v1/purchase_puroducts
  def index
    response = PurchaseProduct.all
    render json: response
  end

  # GET /api/v1/purchase_puroducts/:id
  def show
    render json: @purchase_history
  end

  private

  def set_purchase_puroduct
    @purchase_history ||= PurchaseProduct.find(params[:id])
  end
end

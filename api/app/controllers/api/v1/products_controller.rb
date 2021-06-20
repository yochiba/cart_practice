# frozen_string_literal: true

class Api::V1::ProductsController < ApplicationController
  before_action :set_product, only: [:show, :update, :destroy]

  # GET /api/v1/products
  def index
    response = Product.where.not(display_flag: false)
    render json: response
  end

  # POST /api/v1/products
  def create
  end

  # GET /api/v1/products/:id
  def show
    render json: @product
  end

  # PUT /api/v1/products/:id
  def update
    @product
    render json: response
  end

  # DELETE /api/v1/products/:id
  def destroy
    @product.destroy
    render json: { status: 200, result: 'ok' }
  end

  private
    def set_product
      @product = Product.find(params[:id])
    end
end

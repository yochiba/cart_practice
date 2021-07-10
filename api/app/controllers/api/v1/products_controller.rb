# frozen_string_literal: true

class Api::V1::ProductsController < ApplicationController
  before_action :set_product, only: [:show, :update, :destroy]
  before_action :create_params, only: :create

  # GET /api/v1/products
  def index
    response = Product.where.not(display_flag: false)
    render json: response
  end

  # POST /api/v1/products
  def create
    response = Product.new().create_product(params)
    render json: response
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

  def create_params
    params.require(:product).permit(:name, :description, :price, :stock, :category_id, :display_flag)
  end
end

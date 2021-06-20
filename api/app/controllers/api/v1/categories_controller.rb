# frozen_string_literal: true

class Api::V1::CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :update, :destroy]

  # GET /api/v1/categories
  def index
    response = Category.all
    render json: response
  end

  # POST /api/v1/categories
  def create
  end

  # GET /api/v1/categories/:id
  def show
    render json: @category
  end

  # PUT /api/v1/categories/:id
  def update
    render json: @category
  end

  # DELETE /api/v1/categories/:id
  def destroy
    @category.destroy
    render json: { status: 200, result: 'ok' }
  end

  private

  def set_category
    @category = Category.find(params[:id])
  end
end

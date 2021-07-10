# frozen_string_literal: true

class Api::V1::AccountsController < ApplicationController
  before_action :set_account, only: :show

  # GET /api/v1/accounts
  def index
    response = Account.all
    render json: response
  end

  # GET /api/v1/accounts/:id
  def show
    render json: @account
  end

  private

  def set_account
    @account = Account.find(params[:id])
  end
end

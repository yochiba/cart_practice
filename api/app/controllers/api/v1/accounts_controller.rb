# frozen_string_literal: true

class Api::V1::AccountsController < ApplicationController
  before_action :set_account, only: :show

  # GET /api/v1/accounts
  def index
    accounts = Account.all
    render json: accounts, status: :ok, result: :ok, serializer: AccountSerializer
  end

  # GET /api/v1/accounts/:id
  def show
    render json: @account, status: :ok, result: :ok, serializer: AccountSerializer
  end

  private

  def set_account
    @account ||= Account.find(params[:id])
  end
end

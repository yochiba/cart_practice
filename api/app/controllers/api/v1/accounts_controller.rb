# frozen_string_literal: true

class Api::V1::AccountsController < ApplicationController
  before_action :set_accounts, only: :index
  before_action :set_account, only: :show

  # GET /api/v1/accounts
  def index
    render json: @accounts, status: :ok, result: :ok
  end

  # GET /api/v1/accounts/:id
  def show
    render json: @account, status: :ok, result: :ok
  end

  private

  def set_accounts
    @accounts ||= Account.all
  end

  def set_account
    @account ||= Account.find(params[:id])
  end
end

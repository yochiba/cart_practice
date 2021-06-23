# frozen_string_literal: true

class Api::V1::Auth::RegistrationsController < ApplicationController
  before_action :sign_up_params, only: :create

  def create
    response = Account.create!(
      firstname: params[:firstname],
      lastname: params[:lastname],
      email: params[:email],
      phone: params[:phone],
      password: params[:password],
      password_confirmation: params[:password_confirmation],
    )
    render json: response
  end

  private

  def sign_up_params
    params.require(:registration).permit(:firstname, :lastname, :email, :phone, :password, :password_confirmation)
  end

  def account_update_params
    params.permit(:firstname, :lastname, :email, :phone)
  end
end

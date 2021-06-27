# frozen_string_literal: true

module Api::V1
  class Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController    
    private
  
    def sign_up_params
      params.require(:registration).permit(:firstname, :lastname, :email, :phone, :password, :password_confirmation)
    end
  
    def account_update_params
      params.permit(:firstname, :lastname, :email, :phone)
    end
  end
end

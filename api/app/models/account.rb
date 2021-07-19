# frozen_string_literal: true

class Account < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User

  # 暗号化
  encrypts :firstname,
           :lastname,
           :zip,
           :address_one,
           :address_two,
           :address_three

  validates :firstname, presence: true
  validates :lastname, presence: true
  validates :email, presence: true, uniqueness: { case_sensitive: true }
  validates :phone, presence: true, uniqueness: { case_sensitive: true }, length: { in: 9..11 }
  validates :zip, presence: true
  validates :address_one, presence: true
  validates :address_two, presence: true
end

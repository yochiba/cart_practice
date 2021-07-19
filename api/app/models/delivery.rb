# frozen_string_literal: true

class Delivery < ApplicationRecord
  has_many :purchase_histories

  # 暗号化
  encrypts :firstname,
           :lastname,
           :zip,
           :address_one,
           :address_two,
           :address_three

  validates :firstname, presence: true
  validates :lastname, presence: true
  validates :email, presence: true, uniqueness: true
  validates :phone, presence: true, uniqueness: true, length: { in: 9..11 }
  validates :zip, presence: true
  validates :address_one, presence: true
  validates :address_two, presence: true
end

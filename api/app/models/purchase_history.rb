# frozen_string_literal: true

class PurchaseHistory < ApplicationRecord
  belongs_to :account
  belongs_to :delivery

  has_many :products, through: :purchase_products, dependent: :destroy
  has_many :purchase_products, dependent: :destroy

  validates :shipping_type, presence: true
  validates :shipping_status, presence: true
  validates :payment_type, presence: true
  validates :payment_status, presence: true
  validates :total_price, presence: true
end

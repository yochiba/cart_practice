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

  # 購入履歴作成
  def self.generate_purchase_history(params)
    # account_idとdelivery_idが必要
    PurchaseHistory.create!(
      payment_type: params[:payment_type],
      payment_status: params[:payment_status],
      delivery_type: params[:delivery_type],
      delivery_status: params[:delivery_status],
      message: params[:message],
      total_price: params[:total_price],
    )
  end
end
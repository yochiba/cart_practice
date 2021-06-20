# frozen_string_literal: true

class Product < ApplicationRecord
  belongs_to :category

  attribute :id, :integer
  attribute :name, :string
  attribute :price, :integer
  attribute :category_id, :integer
  attribute :serial_number, :string
  attribute :stock, :integer
  attribute :display_flag, :boolean
  attribute :created_at, :datetime
  attribute :updated_at, :datetime

  # serial_numberのフォーマット
  VALID_SERIAL_NUMBER_FORMAT = /[A-Z]{3}-[0-9]{6}/

  validates :name, presence: true
  validates :price, presence: true, numericality: true
  validates :serial_number, presence: true, uniqueness: true,
             length: { is: 10 }, format: { with: VALID_SERIAL_NUMBER_FORMAT }
  validates :stock, presence: true, numericality: true
end

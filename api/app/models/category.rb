# frozen_string_literal: true

class Category < ApplicationRecord
  has_many :products, dependent: :destroy

  attribute :id, :integer
  attribute :name, :string
  attribute :serial_prefix, :string
  attribute :description, :string
  attribute :created_at, :datetime
  attribute :updated_at, :datetime

  # serial_prefixのフォーマット
  VALID_SERIAL_PREFIX_FORMAT = /[A-Z]{3}/

  validates :name, presence: true
  validates :serial_prefix, presence: true, uniqueness: true,
             length: { is: 3 }, format: { with: VALID_SERIAL_PREFIX_FORMAT }
end

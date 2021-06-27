# frozen_string_literal: true

class Product < ApplicationRecord
  belongs_to :category

  attribute :id, :integer
  attribute :name, :string
  attribute :description, :string
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

  # product生成
  def create_product(params)
    category = Category.find(params[:category_id])
    # serial_number生成
    product_count = Product.where(category_id: category.id).count + 1
    serial_number = "#{category.serial_prefix}-#{sprintf('%06d', product_count)}"

    category.products.create!(
      name: params[:name],
      description: params[:description],
      price: params[:price].to_i,
      serial_number: serial_number,
      stock: params[:stock].to_i,
      display_flag: params[:display_flag],
    )
  end
end

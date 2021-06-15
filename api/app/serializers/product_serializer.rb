# frozen_string_literal: true

class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :category_id, :serial_number,
             :stock, :created_at, :updated_at

  belongs_to :category
end

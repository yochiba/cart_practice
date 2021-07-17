# frozen_string_literal: true

class DeliverySerializer < ActiveModel::Serializer
  attributes :id,
             :firstname,
             :lastname,
             :email,
             :phone,
             :zip,
             :address_one,
             :address_two,
             :address_three,
             :created_at,
             :updated_at,
end

# frozen_string_literal: true

class AccountSerializer < ActiveModel::Serializer
  attributes :id,
             :firstname,
             :lastname,
             :email,
             :phone,
             :created_at,
             :updated_at
end

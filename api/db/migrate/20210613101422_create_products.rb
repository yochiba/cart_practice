# frozen_string_literal: true

class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name, null: false, comment: '商品名'
      t.text :description, comment: '商品説明'
      t.integer :price, null: false, default: 0, comment: '商品価格'
      t.string :serial_number, null: false,　limit: 10, comment: 'シリアルナンバー'
      t.integer :stock, null: false, default: 0, comment: '商品在庫'
      t.timestamps
    end
  end
end

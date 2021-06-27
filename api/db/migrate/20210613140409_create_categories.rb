# frozen_string_literal: true

class CreateCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :categories do |t|
      t.string :name, null: false, comment: 'カテゴリー名'
      t.string :serial_prefix, null: false, comment: 'シリアル番号 接頭辞'
      t.text :description, comment: 'カテゴリー説明'
      t.timestamps
    end
  end
end

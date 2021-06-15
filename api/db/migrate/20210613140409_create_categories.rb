class CreateCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :categories do |t|
      t.string :name, nil: false, comment: 'カテゴリー名'
      t.text :description, comment: 'カテゴリー説明'
      t.timestamps
    end
  end
end

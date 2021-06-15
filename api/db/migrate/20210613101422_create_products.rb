class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name, nil: false, comment: '商品名'
      t.integer :price, nil: false, default: 0, comment: '商品価格'
      t.string :serial_number, nil: false,　limit: 10, comment: 'シリアルナンバー'
      t.integer :stock, nil: false, default: 0, comment: '商品在庫'
      t.timestamps
    end
  end
end

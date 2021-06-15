class MakeRelationProductsAndCategory < ActiveRecord::Migration[6.1]
  def up
    add_reference :products, :category, index: true, nil: false
  end

  def down
    remove_reference :products, :category, index: true
  end
end

class AddDisplayFlagProducts < ActiveRecord::Migration[6.1]
  def up
    add_column :products, :display_flag, :boolean, default: false, null: false
  end

  def down
    remove_column :products, :display_flag, :boolean
  end
end

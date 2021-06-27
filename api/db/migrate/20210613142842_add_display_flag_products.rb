# frozen_string_literal: true

class AddDisplayFlagProducts < ActiveRecord::Migration[6.1]
  def up
    add_column :products, :display_flag, :boolean, default: false, null: false, comment: '公開・非公開フラグ 0:非公開 1:公開'
  end

  def down
    remove_column :products, :display_flag, :boolean
  end
end

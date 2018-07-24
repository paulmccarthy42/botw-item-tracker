class CreateLevelUpItems < ActiveRecord::Migration
  def change
    create_table :level_up_items do |t|
      t.integer :level_id
      t.integer :item_id
      t.integer :count
      t.timestamps null: false
    end
  end
end

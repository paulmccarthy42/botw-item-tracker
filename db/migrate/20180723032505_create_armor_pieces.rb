class CreateArmorPieces < ActiveRecord::Migration
  def change
    create_table :armor_pieces do |t|
      t.integer :armor_id
      t.integer :level

      t.timestamps null: false
    end
  end
end

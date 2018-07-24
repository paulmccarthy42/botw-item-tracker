class CreateLevels < ActiveRecord::Migration
  def change
    create_table :levels do |t|
      t.integer :armor_piece_id
      t.integer :level
      t.timestamps null: false
    end
  end
end

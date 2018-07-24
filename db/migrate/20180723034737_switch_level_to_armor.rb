class SwitchLevelToArmor < ActiveRecord::Migration
  def change
    rename_column :levels, :armor_piece_id, :armor_id
  end
end

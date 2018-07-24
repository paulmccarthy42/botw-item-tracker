class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string :name
      t.timestamps null: false
    end

    add_column :armor_pieces, :player_id, :integer
  end
end

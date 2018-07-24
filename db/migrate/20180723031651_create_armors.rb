class CreateArmors < ActiveRecord::Migration
  def change
    create_table :armors do |t|
      t.string :name
      t.string :location
      t.integer :cost
      t.timestamps null: false
    end
  end
end

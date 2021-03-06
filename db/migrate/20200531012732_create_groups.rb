class CreateGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :groups do |t|
      t.string :name, null: false
      t.integer :admin_id, null: false
      t.integer :network_id, null: false 
      t.timestamps
    end
    add_index :groups, :name, unique: true
  end
end

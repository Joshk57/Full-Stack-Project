class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.string :title, null: false
      t.bigint :host_id, null: false
      t.string :name, null: false
      t.text :description, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :num_bedrooms, null: false
      t.integer :num_bathrooms, null: false
      t.float :price, null: false
      t.timestamps
    end

    add_index :listings, :host_id
    add_index :listings, :city
    add_index :listings, :state

    add_foreign_key :listings, :users, column: :host_id
  end
end

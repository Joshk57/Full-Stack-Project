class ChangeListings2 < ActiveRecord::Migration[7.0]
  def change
    remove_column :listings, :address

    add_column :listings, :address, :string, null: false, unique: true
  end
end

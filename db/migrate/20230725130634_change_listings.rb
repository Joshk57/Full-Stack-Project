class ChangeListings < ActiveRecord::Migration[7.0]
  def change
    remove_column :listings, :address

    add_column :listings, :address, :string, null: false, uniqueness: true
  end
end

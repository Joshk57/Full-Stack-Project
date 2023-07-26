class ChangeListingsAgain < ActiveRecord::Migration[7.0]
  def change
    add_column :listings, :max_guests, :integer, null: false, default: 1
    add_column :listings, :num_beds, :integer, null: false, default: 1
    add_column :listings, :image, :string

  end
end

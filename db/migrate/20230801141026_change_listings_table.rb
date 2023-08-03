class ChangeListingsTable < ActiveRecord::Migration[7.0]
  def change
    remove_column :listings, :wifi
    remove_column :listings, :kitchen
    remove_column :listings, :tv
    remove_column :listings, :pets_allowed
    remove_column :listings, :free_parking
    remove_column :listings, :air_conditioning
    remove_column :listings, :pool

    add_column :listings, :latitude, :float, null: true
    add_column :listings, :longitude, :float, null: true
  end
end

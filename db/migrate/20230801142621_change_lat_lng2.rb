class ChangeLatLng2 < ActiveRecord::Migration[7.0]
  def change
    add_column :listings, :latitude, :float, null: false
    add_column :listings, :longitude, :float, null: false
  end
end

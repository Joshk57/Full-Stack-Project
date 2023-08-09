class ChangeLatLng < ActiveRecord::Migration[7.0]
  def change
    remove_column :listings, :latitude, :float
    remove_column :listings, :longitude, :float
  end
end

class ChangeLatLong < ActiveRecord::Migration[7.0]
  def change
    change_column :listings, :latitude, :float, null: false
    change_column :listings, :longitude, :float, null: false
  end
end

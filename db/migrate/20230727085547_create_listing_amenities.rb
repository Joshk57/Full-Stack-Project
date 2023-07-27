class CreateListingAmenities < ActiveRecord::Migration[7.0]
  def change
    create_table :listing_amenities do |t|
      t.references :listing
      t.references :amenity
      t.timestamps
    end

    add_index :listing_amenities, [:amenity_id, :listing_id], unique: true
  end
end

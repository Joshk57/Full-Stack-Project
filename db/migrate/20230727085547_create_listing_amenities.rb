class CreateListingAmenities < ActiveRecord::Migration[7.0]
  def change
    create_table :listing_amenities do |t|
      t.references :listing, foreign_key: true
      t.references :amenity, foreign_key: true
      t.timestamps
    end
  end
end

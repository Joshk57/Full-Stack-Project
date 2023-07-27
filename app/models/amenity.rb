# == Schema Information
#
# Table name: amenities
#
#  id   :bigint           not null, primary key
#  name :string
#
class Amenity < ApplicationRecord

    has_many :listing_amenities

    has_many :listings, 
        through: :listing_amenities
end

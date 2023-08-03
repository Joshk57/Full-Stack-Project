# == Schema Information
#
# Table name: listing_amenities
#
#  id         :bigint           not null, primary key
#  listing_id :bigint
#  amenity_id :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class ListingAmenity < ApplicationRecord
    validates :amenity_id, uniqueness: { scope: :listing_id }
    
    belongs_to :listing
    belongs_to :amenity
end

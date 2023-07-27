# == Schema Information
#
# Table name: listing_amenities
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class ListingAmenity < ApplicationRecord
    validates :amenity, uniqueness: { scope: :listing }
    belongs_to :listing
    belongs_to :amenity
end

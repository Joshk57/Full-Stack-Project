# == Schema Information
#
# Table name: listings
#
#  id            :bigint           not null, primary key
#  host_id       :bigint           not null
#  name          :string           not null
#  description   :text             not null
#  city          :string           not null
#  state         :string           not null
#  num_bedrooms  :integer          not null
#  num_bathrooms :integer          not null
#  price         :float            not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  max_guests    :integer          default(1), not null
#  num_beds      :integer          default(1), not null
#  latitude      :float            not null
#  longitude     :float            not null
#  country       :string
#
class Listing < ApplicationRecord
    validates :name, :description, :latitude, :longitude, presence: true
    validates :max_guests, :num_bedrooms, :num_beds, :num_bathrooms, :price, presence: true
    validates :city, :state, presence: true
    validates :host_id, presence: true

    # validates :image

    belongs_to :host,
        foreign_key: :host_id,
        class_name: :User

    has_many :listing_amenities

    has_many :amenities,
        through: :listing_amenities

    has_many :reservations,
        foreign_key: :listing_id,
        class_name: :Reservation,
        dependent: :destroy


    # has_one_attached :photo
    has_many_attached :photos, dependent: :destroy
end

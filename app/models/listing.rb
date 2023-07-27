# == Schema Information
#
# Table name: listings
#
#  id               :bigint           not null, primary key
#  host_id          :bigint           not null
#  name             :string           not null
#  description      :text             not null
#  city             :string           not null
#  state            :string           not null
#  num_bedrooms     :integer          not null
#  num_bathrooms    :integer          not null
#  price            :float            not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  address          :string           not null
#  max_guests       :integer          default(1), not null
#  num_beds         :integer          default(1), not null
#  image            :string
#  wifi             :boolean          default(FALSE), not null
#  kitchen          :boolean          default(FALSE), not null
#  tv               :boolean          default(FALSE), not null
#  pets_allowed     :boolean          default(FALSE), not null
#  free_parking     :boolean          default(FALSE), not null
#  air_conditioning :boolean          default(FALSE), not null
#  pool             :boolean          default(FALSE), not null
#
class Listing < ApplicationRecord
    validates :name, :description, presence: true
    validates :address, presence: true, uniqueness: true
    validates :max_guests, :num_bedrooms, :num_beds, :num_bathrooms, :price, presence: true
    validates :city, :state, presence: true
    validates :host_id, presence: true
    validates :wifi, :kitchen, :tv, :pets_allowed, :free_parking, :air_conditioning, :pool, inclusion: { in: [true, false]}
    # validates :image

    belongs_to :host,
        foreign_key: :host_id,
        class_name: :User

    has_many :listing_amenities

    has_many :amenities,
        through: :listing_amenities


    # has_one_attached :image
    has_many_attached :images
end

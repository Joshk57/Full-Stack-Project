# == Schema Information
#
# Table name: listings
#
#  id            :bigint           not null, primary key
#  title         :string           not null
#  host_id       :bigint           not null
#  name          :string           not null
#  description   :text             not null
#  address       :string           not null
#  city          :string           not null
#  state         :string           not null
#  num_bedrooms  :integer          not null
#  num_bathrooms :integer          not null
#  price         :float            not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Listing < ApplicationRecord
    validates :name, :description, presence: true
    validates :address, presence: true, uniqueness: true
    validates :num_bedrooms, :num_bathrooms, :price, presence: true
    validates :city, :state, presence: true
    validates :host_id, presence: true

    belongs_to :host,
        foreign_key: :host_id,
        class_name: :User

    
end

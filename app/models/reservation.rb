# == Schema Information
#
# Table name: reservations
#
#  id          :bigint           not null, primary key
#  listing_id  :bigint           not null
#  reserver_id :bigint           not null
#  start_date  :date             not null
#  end_date    :date             not null
#  num_guests  :integer          not null
#  total_price :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Reservation < ApplicationRecord
    validates :listing_id, :reserver_id, :start_date, :end_date, :num_guests, :total_price, presence: true

    belongs_to :reserver,
        foreign_key: :reserver_id,
        class_name: :User

    belongs_to :listing,
        foreign_key: :listing_id,
        class_name: :Listing
end

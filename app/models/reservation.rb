class Reservation < ApplicationRecord
    validates :listing_id, :reserver_id, :startDate, :endDate, :max_guets, :total_price, presence: true

    belongs_to :reserver

    belongs_to :listing
end

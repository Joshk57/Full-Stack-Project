class Reservation < ApplicationRecord
    validates :listing_id, :reserver_id, :start_date, :end_date, :num_guests, :total_price, presence: true

    belongs_to :reserver,
        foreign_key: :reserver_id,
        class_name: :User

    belongs_to :listing,
        foreign_key: :listing_id,
        class_name: :Listing
end

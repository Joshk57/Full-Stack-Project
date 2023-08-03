json.extract! @reservation, :id, :listing_id, :reserver_id, :start_date, 
    :end_date, :num_guests, :total_price, :created_at, :updated_at, :listing

# json.listing reservation.listing
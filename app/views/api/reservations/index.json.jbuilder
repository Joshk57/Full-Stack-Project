json.reservations do
    @reservations.each do |reservation|
        json.set! reservation.id do
            json.extract! reservation, :id, :listing_id, :reserver_id, :start_date, :end_date, :num_guests, :total_price
            json.listing reservation.listing
            # json.reservation.listing.photoUrls listing.photos.attached? ? reservation.listing.photos[0].url : []
        end
    end
end
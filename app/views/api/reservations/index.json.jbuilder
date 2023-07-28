json.reservations do
    @reservations.each do |reservation|
        json.set! reservation.id do
            json.extract! reservation, :id, :listing_id, :reserver_id, :start_date, :end_date, :num_guests, :total_price
        end
    end
end
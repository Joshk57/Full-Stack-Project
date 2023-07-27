@amenities.each do |amenity|
    json.set! amenity.id do
        json.id amenity.id
        json.amenity amenity.name
    end
end


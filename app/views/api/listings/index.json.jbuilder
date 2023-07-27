
@listings.each do |listing|
    json.set! listing.id do
        json.id listing.id
        json.host_id listing.host_id
        json.name listing.name
        json.description listing.description
        json.address listing.address
        json.city listing.city
        json.state listing.state
        json.max_guests listing.max_guests
        json.num_bedrooms listing.num_bedrooms
        json.wifi listing.wifi
        json.kitchen listing.kitchen
        json.tv listing.tv
        json.pets_allowed listing.pets_allowed
        json.free_parking listing.free_parking
        json.air_conditioning listing.air_conditioning
        json.pool listing.pool
        json.num_beds listing.num_beds
        json.num_bathrooms listing.num_bathrooms
        json.price listing.price
        json.image listing.image
        json.amenities listing.amenities.to_a.map{|amenity| amenity.name}
        json.created_at listing.created_at
        json.updated_at listing.updated_at
    end
end

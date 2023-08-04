json.listings({})

json.listings do
    @listings.each do |listing|
        json.set! listing.id do
            json.id listing.id
            json.host_id listing.host_id
            json.name listing.name
            json.description listing.description
            json.city listing.city
            json.state listing.state
            json.country listing.country
            json.max_guests listing.max_guests
            json.num_bedrooms listing.num_bedrooms
            json.num_beds listing.num_beds
            json.num_bathrooms listing.num_bathrooms
            json.latitude listing.latitude
            json.longitude listing.longitude
            json.price listing.price
            json.amenities listing.amenities.to_a.map{|amenity| amenity.name}
            # json.photoUrls listing.photos.attached? ? listing.photos.map { |photo| url_for(photo) } : []
            json.photoUrls listing.photos.attached? ? listing.photos[0].url : []
            json.created_at listing.created_at
            json.updated_at listing.updated_at
        end
    end
end
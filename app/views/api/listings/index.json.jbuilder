
@listings.each do |listing|
    json.set! listing.id do
        json.id listing.id
        json.host_id listing.host_id
        json.name listing.name
        json.description listing.description
        json.address listing.address
        json.city listing.city
        json.state listing.state
        json.num_bedrooms listing.num_bedrooms
        json.num_bathrooms listing.num_bathrooms
        json.price listing.price
        json.created_at listing.created_at
        json.updated_at listing.updated_at
    end
end

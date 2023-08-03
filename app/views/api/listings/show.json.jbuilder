# debugger

json.extract! @listing, :id, :host_id, :name, :description, :city, :state, 
    :country, :max_guests, :num_bedrooms, :num_beds, :num_bathrooms,
    :latitude, :longitude, :price, :created_at, :updated_at
    
    
amenities = @listing.amenities.to_a.map{|amenity| amenity.name}
json.amenities amenities

    

# json.extract! @listing, :photo


json.photoUrls @listing.photos.attached? ? @listing.photos.map { |photo| url_for(photo) } : []

#psuedo-code
#@listing.reviews.where(listing_id: ) average rating
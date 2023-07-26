# debugger

    json.extract! @listing, :id, :host_id, :name, :description, :address,
        :city, :state, :max_guests, :num_bedrooms, :num_beds, :num_bathrooms, 
        :wifi, :kitchen, :tv, :pets_allowed, :free_parking, :air_conditioning, 
        :pool, :price, :image, :created_at, :updated_at


# json.extract! @listing, :image
# json.img_url @listing.image.url
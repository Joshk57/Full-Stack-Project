json.listing do
    json.extract! @listing, :id, :host_id, :name, :description, :address,
        :city, :state, :num_bedrooms, :num_bathrooms, :price, :created_at, :updated_at
end
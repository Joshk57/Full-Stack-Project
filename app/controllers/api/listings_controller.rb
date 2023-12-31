class Api::ListingsController < ApplicationController

    def index
        @listings = Listing.all.includes(:amenities).includes(:reservations)
        
        render :index
    end

    def show
        @listing = Listing.find_by(id: params[:id])

        if @listing
            render :show
        else
            redirect_to "/"
        #     render json: { errors: @listing.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def create
        @listing = Listing.new(listing_params)

        @listing.host_id = current_user.id
        if @listing.save
            render :show
        else
            render json: { errors: @listing.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        @listing = Listing.find_by(id: params[:id])

        if @listing.update(listing_params)
            @listing.save
            render :show
        else
            render json: { errors: @listing.errors.full_messages }, status: :unprocessable_entity
        end
    end
    
    def destroy
        @listing = Listing.find_by(id: params[:id])
        if @listing.host_id == current_user.id
            @listing.destroy
        end
    end

    def search
        query = params[:query]
        # price = params[:price]
        @listings = Listing
        .where('name ILIKE ? OR country ILIKE ?', "%#{query}%", "%#{query}%")
        # .where('name ILIKE ?', "%#{query}%")

        #http://localhost:5000/api/listings/search?query=      <---- search like this

        render :search
    end

    private

    def listing_params
        params.require(:listings).permit(:host_id, :name, :description, :city, :state, :country,
        :max_guests, :num_bedrooms, :num_beds, :num_bathrooms, :latitude, :longitude, :price)
    end



end
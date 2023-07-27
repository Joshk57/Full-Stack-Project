class Api::ListingsController < ApplicationController

    def index
        @listings = Listing.all.includes(:amenities)
        
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

    private

    def listing_params
        params.require(:listings).permit(:host_id, :name, :description, :address, :city, :state,
        :max_guests, :num_bedrooms, :num_beds, :num_bathrooms, :wifi, :kitchen,
         :tv, :pets_allowed, :free_parking, :air_conditioning, :pool, :price, :image)
    end



end
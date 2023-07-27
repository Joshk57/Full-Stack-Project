class Api::AmenitiesController < ApplicationController
    def index
        @amenities = Amenity.all

    end

    def create
        @amenity = Amenity.new(amenity_params)

        if @amenity.save
            render :show

        else
            render json: { errors: @amenity.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private
    def amenity_params
        params.require(:amenity).permit(:name)
    end
end
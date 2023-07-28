class Api::ReservationsController < ApplicationController
    def index
        @reservations = Reservation.all
        
        render :show
    end

    def show
        
    end
    def create
        @reservation = Reservation.new(reservation_params)

        if @reservation.save
            render :show

        else
            render json: { errors: @amenity.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private
    def reservation_params
        params.require(:amenity).permit(:name)
    end
end
class Api::ReservationsController < ApplicationController
    wrap_parameters include: Reservation.attribute_names 
    def index
        @reservations = Reservation.all
        
        render :index
    end

    def show
        @reservation = Reservation.find_by(id: params[:id])
        if @reservation
            render :show
        else
            render json: { errors: @reservation.errors.full_messages }, status: :unprocessable_entity
        end

    end

    def create
        # debugger
        listing = Listing.find_by(id: reservation_params[:listing_id])
        if listing
            @reservation = Reservation.new(reservation_params)
            @reservation.listing_id = listing.id
            if current_user 
                @reservation.reserver_id = current_user.id
                if @reservation.save
                    render :show
                else
                    render json: { errors: @reservation.errors.full_messages }, status: :unprocessable_entity
                end
            else
                render json: { errors: ["You must be logged in to create a reservation"]}, status: :unprocessable_entity
            end
        else
            render json: { errors: ["You can't create a reservation for a listing that does not exist"]}, status: :unprocessable_entity
        end
    end


    def update
        @reservation = Reservation.find_by(id: params[:id])
        
        if @reservation && @reservation.reserver_id == current_user.id
            if @reservation.update(reservation_params)
                render :show
            else
                render json: { errors: @reservation.errors.full_messages }, status: :unprocessable_entity
            end
        else
            render json: { errors: ["You do not own this reservation"]}, status: :unprocessable_entity
        end
    end

    def destroy
        @reservation = Reservation.find_by(id: params[:id])
        if @reservation
            @reservation.destroy
        else
            render json: { errors: @reservation.errors.full_messages }, status: :unprocessable_entity
        end
    end
    private
    def reservation_params
        params.require(:reservation).permit(:listing_id, :reserver_id, :start_date, :end_date, :num_guests, :total_price)
    end
end
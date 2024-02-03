class Api::ReviewsController < ApplicationController

# fix VSCode and then do migrations


    def show
        @review = Review.find_by(id: params[:id])

        if @review
            render :review
        else
            render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def create

    end
    
end
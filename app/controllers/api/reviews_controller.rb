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
        @review = 
    end

    def update
    end

    def destroy
    end

    private
    def review_params
        params.require(:review).permit()
    end

end
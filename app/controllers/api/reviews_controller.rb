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

    # check conditions
    def update
        @review = Review.find_by(id: params[:id])

        if @review.update(review_params)
            @review.save
            render :show
        else
            render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
        end
        

    end

    def destroy
    end

    private
    def review_params
        params.require(:review).permit()
    end

end
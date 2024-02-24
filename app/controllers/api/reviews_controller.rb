class Api::ReviewsController < ApplicationController

# fix VSCode and then do migrations

    def index
        @reviews = Review.all
        # add views in order to render
        render 'api/reviews/index'
        
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            render 'api/reviews/show'
        else
            render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
        end
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

    #check if correct
    def destroy
        @review = Review.find_by(id: params[:id])
        if @review
            @listing.destroy
        end
    end

    private
    #finish review params 
    def review_params
        params.require(:review).permit()
    end

end
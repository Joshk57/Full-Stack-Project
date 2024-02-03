import csrfFetch from "./csrf";

export const RECEIVE_REVIEW = 'reviews/receiveReview'
export const RECEIVE_REVIEWS = 'reviews/receiveReviews'
export const REMOVE_REVIEWS = 'reviews/removeReviews'


const receiveReview = (review) => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
} 

const receiveReviews = (reviews) => {
    return {
        type: RECEIVE_REVIEWS,
        reviews
    }
} 

const removeReviews = (reviewId) => {
    return {
        type: REMOVE_REVIEW,
        reviewId
    }
} 

export const getReview = (reviewId) => (state) => {
    if (state && state.reviews) {
        return state.reviews[reviewId]
    } else {
        return null
    }
}

export const getReviews = (state) => {
    if (state && state.reviews) {
        return Object.values(state.reviews)
    } else {
        return []
    }
}
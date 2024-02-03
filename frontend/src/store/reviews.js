import csrfFetch from "./csrf";

export const RECEIVE_REVIEW = 'reviews/receiveReview'
export const RECEIVE_REVIEWS = 'reviews/receiveReviews'
export const REMOVE_REVIEW = 'reviews/removeReview'


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

export const fetchReview = (reviewId) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`)
    
    if (response.ok) {
        const review = await response.json()
        dispatch(receiveReview(review))
    }
}

export const fetchReviews = () => async dispatch => {
    const response = await csrfFetch('/api/reviews')

    if (response.ok) {
        const reviews = await response.json()
        dispatch(receiveReviews(reviews))
    }
}
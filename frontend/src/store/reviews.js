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

const removeReview = (reviewId) => {
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

export const createReview = (review) => async dispatch => {
    const response = await csrfFetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify(review)
    })

    if (response.ok) {
        const reservation = await response.json()
        dispatch(receiveReview(reservation))
    } 
    return response
}

// check if update review is correct
export const updateReview = (review) => async dispatch => {

    const response = await csrfFetch(`/api/reviews/${review.id}`, {
        method: 'PATCH',
        body: JSON.stringify(review)
    })

    if (response.ok) {
        const review = await response.json()
        dispatch(receiveReview(review))
    }
}

export const deleteReview = (reviewId) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    })
    if (response.ok) {
        dispatch(removeReview(reviewId))
    }
}

const reviewsReducer = (state = {}, action) => {
    let newState = {...state}
    switch (action.type) {
        case RECEIVE_REVIEW:
            return {...newState, [action.reservation.id]: action.reservation}
        case RECEIVE_REVIEWS:
            return {...newState, ...action.reviews}
        case REMOVE_REVIEW:
            delete newState[action.reviewId]
            return newState
        default:
            return state
    }
}

export default reviewsReducer
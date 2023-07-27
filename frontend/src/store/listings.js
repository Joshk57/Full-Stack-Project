import csrfFetch from "./csrf";

export const RECEIVE_LISTING = 'listings/receiveListing'
export const RECEIVE_LISTINGS = 'listings/receiveListings'
export const REMOVE_LISTING = 'listings/removeListing'


const receiveListing = (listing) => {
    return {
        type: RECEIVE_LISTING,
        listing
    }
} 

const receiveListings = (listings) => {
    return {
        type: RECEIVE_LISTINGS,
        listings
    }
} 

const removeListing = (listingId) => {
    return {
        type: REMOVE_LISTING,
        listingId
    }
} 

export const getListing = (listingId) => (state) => {
    if (state && state.listings) {
        return state.listings[listingId]
    } else {
        return null
    }
}

export const getListings = (state) => {
    if (state && state.listings) {
        return Object.values(state.listings)
    } else {
        return []
    }
}

export const fetchListing = (listingId) => async dispatch => {
    const response = await csrfFetch(`/api/listings/${listingId}`)
    // debugger
    if (response.ok) {
        const listing = await response.json()
        dispatch(receiveListing(listing))
    }
}

export const fetchListings = () => async dispatch => {
    const response = await csrfFetch('api/listings')

    if (response.ok) {
        const listings = await response.json()
        dispatch(receiveListings(listings))
    }
}

export const createListing = (listing) => async dispatch => {
    const response = await csrfFetch('api/listings', {
        method: 'POST',
        body: JSON.stringify(listing)
    })

    if (response.ok) {
        const listing = await response.json()
        dispatch(receiveListing(listing))
    }
}

export const updateListing = (listing) => async dispatch => {
    const response = await csrfFetch(`api/listings/${listing.id}`, {
        method: 'PATCH',
        body: JSON.stringify(listing)
    })

    if (response.ok) {
        const listing = await response.json()
        dispatch(receiveListing(listing))
    }
}

export const deleteListing = (listingId) => async dispatch => {
    const response = await csrfFetch(`api/listings/${listingId}`, {
        method: 'DELETE'
    })
    if (response.ok) {
        dispatch(removeListing(listingId))
    }
}

const listingsReducer = (state = {}, action) => {
    let newState = {...state}
    switch (action.type) {
        case RECEIVE_LISTING:
            return {...newState, [action.listing.id]: action.listing}
        case RECEIVE_LISTINGS:
            return {...action.listings}
        case REMOVE_LISTING:
            delete newState[action.listingId]
            return newState
        default:
            return state
    }
}

export default listingsReducer
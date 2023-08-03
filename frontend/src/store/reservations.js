import csrfFetch from "./csrf";

export const RECEIVE_RESERVATION = 'reservations/receiveReservation'
export const RECEIVE_RESERVATIONS = 'reservations/receiveReservations'
export const REMOVE_RESERVATION = 'reservations/removeReservation'


const receiveReservation = (reservation) => {
    return {
        type: RECEIVE_RESERVATION,
        reservation
    }
} 

const receiveReservations = (reservations) => {
    return {
        type: RECEIVE_RESERVATIONS,
        reservations
    }
} 

const removeReservation = (reservationId) => {
    return {
        type: REMOVE_RESERVATION,
        reservationId
    }
} 

export const getReservation = (reservationId) => (state) => {
    if (state && state.reservations) {
        return state.reservations[reservationId]
    } else {
        return null
    }
}

export const getReservations = (state) => {
    if (state && state.reservations) {
        return Object.values(state.reservations)
    } else {
        return []
    }
}

export const fetchReservation = (reservationId) => async dispatch => {
    const response = await csrfFetch(`/api/reservations/${reservationId}`)
    
    if (response.ok) {
        const reservation = await response.json()
        dispatch(receiveReservation(reservation))
    }
}

export const fetchReservations = () => async dispatch => {
    const response = await csrfFetch('/api/reservations')

    if (response.ok) {
        const reservations = await response.json()
        dispatch(receiveReservations(reservations))
    }
}

export const createReservation = (reservation) => async dispatch => {
    const response = await csrfFetch('/api/reservations', {
        method: 'POST',
        body: JSON.stringify(reservation)
    })

    if (response.ok) {
        const reservation = await response.json()
        dispatch(receiveReservation(reservation))
    } 
    return response
}

export const updateReservation = (reservation) => async dispatch => {
    // debugger
    const response = await csrfFetch(`/api/reservations/${reservation.reservation.id}`, {
        method: 'PATCH',
        body: JSON.stringify(reservation)
    })

    if (response.ok) {
        const reservation = await response.json()
        dispatch(receiveReservation(reservation))
    }
}

export const deleteReservation = (reservationId) => async dispatch => {
    const response = await csrfFetch(`/api/reservations/${reservationId}`, {
        method: 'DELETE'
    })
    if (response.ok) {
        dispatch(removeReservation(reservationId))
    }
}

const reservationsReducer = (state = {}, action) => {
    let newState = {...state}
    switch (action.type) {
        case RECEIVE_RESERVATION:
            return {...newState, [action.reservation.id]: action.reservation}
        case RECEIVE_RESERVATIONS:
            return {...newState, ...action.reservations.reservations}
        case REMOVE_RESERVATION:
            delete newState[action.reservationId]
            return newState
        default:
            return state
    }
}

export default reservationsReducer
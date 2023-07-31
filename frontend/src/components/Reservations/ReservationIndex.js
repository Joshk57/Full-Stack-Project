import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchReservations, getReservations } from "../../store/reservations"
import { fetchListings } from "../../store/listings"
import ReservationIndexItem from "./ReservationIndexItem"
import "./ReservationIndex.css"
const ReservationIndex = () => {
    const dispatch = useDispatch()
    const reservations = useSelector(getReservations)
    const currentUser = useSelector(state => state.session.user)

    console.log(reservations)
    useEffect(() => {
        // dispatch(fetchListings())
        dispatch(fetchReservations())
    }, [dispatch])

    const sortedReservations = reservations.slice().sort((a,b) => {
        return new Date(b.startDate) - new Date(a.startDate)
    })
    // console.log("sortedRes:", sortedReservations)

    return (
        <div className="reservations-index">
            <h1>Upcoming Trips</h1>
            {/* {
                sortedReservations.map((reservation) => (
                    <ReservationIndexItem key={reservation.id} reservation={reservation} />
                ))
            } */}

            {
                reservations.map((reservation) => <ReservationIndexItem key={reservation.id} reservation={reservation} />)
            }
            <h1>Past Trips</h1>

            {/* {
                sortedReservations.map((reservation) => (
                    <ReservationIndexItem key={reservation.id} reservation={reservation} />
                ))
            } */}

        </div>
    )


}


export default ReservationIndex
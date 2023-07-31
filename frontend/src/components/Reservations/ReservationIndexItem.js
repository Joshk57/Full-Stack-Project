import { useDispatch, useSelector } from "react-redux"
import { fetchListing, getListing } from "../../store/listings"
import { useEffect } from "react"
import { deleteReservation, fetchReservation } from "../../store/reservations"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import "./ReservationIndex.css"

const ReservationIndexItem = (props) => {
    const dispatch = useDispatch()
    const reservation = props.reservation
    const listing = reservation.listingId
console.log("reservation:", reservation)
    // console.log({listingId})

    
    const handleClick = (e) => {
        dispatch(deleteReservation(reservation.id))
    }



    return (

        <div className="reservation-index-item-container">
            <div className="reservation-trips">
                {/* <h3>{listing.city}</h3> */}
                    <div className="reservation-pic">
                        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-578897320179146437/original/05928ce6-01ff-4829-bcde-9670e2a03c22.jpeg?im_w=960"></img>

                    </div>
                <div className="reservation-info">
                    <h2 id="reservation-location">Brooklyn, New York</h2>
                    <div className="reservation-host">Cheap Place hosted by </div>
                    <div className="reservation-date"> Aug 10 - 20, 2023</div>
                    <div className="reservation-guests">2 Guests</div>
                    <div className="reservation-price">$430</div>
                    <div className="reservation-edit">
                        {/* <Link to={`reservations/${reservation.id}`}> */}
                        <Link to="/reservations/1">
                            <button type= "submit" id="reservation-change-btn">Change Reservation</button>
                        </Link>
                        <br></br>

                        <button id="reservation-change-btn" onClick={handleClick}>Cancel Reservation</button>


                    </div>
                </div>

            </div>
        </div>
    )
}


export default ReservationIndexItem
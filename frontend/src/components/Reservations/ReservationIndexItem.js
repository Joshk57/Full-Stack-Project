import { useDispatch, useSelector } from "react-redux"
import { fetchListing, getListing } from "../../store/listings"
import { useEffect } from "react"
import { deleteReservation, fetchReservation } from "../../store/reservations"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import "./ReservationIndex.css"
import MyMapListingComponent from "../Map/MyMapListing"



const ReservationIndexItem = (props) => {
    const dispatch = useDispatch()
    const reservation = props.reservation
    // const listing = useSelector(getListing(reservation.listingId))

    // debugger
    // console.log({listingId})
    
    const formatDateRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
      
        const options = { month: "short", day: "numeric" };
        const formattedStart = start.toLocaleDateString(undefined, options);
        const formattedEnd = end.toLocaleDateString(undefined, options);
      
        return `${formattedStart} - ${formattedEnd}, ${start.getFullYear()}`;
      };
    
    const handleClick = () => {


        return dispatch(deleteReservation(reservation.id))
    }


    // debugger
    return (


        <div className="reservation-index-item-container">
                        <div className="reservation-trips">
                            {/* <h3>{listing.city}</h3> */}
                         
                                <>
                                <div className="reservation-pic">
                                    <img src={reservation.listing.photoUrls}></img>
            
                                </div>
                                <div className="reservation-info">
                                    <h2 id="reservation-location">{reservation.listing.city}, {reservation.listing.state}</h2>
                                    <div className="reservation-host">Cheap Place hosted by </div>
                                    <div className="reservation-date">{formatDateRange(reservation.startDate, reservation.endDate)}</div>
                                    <div className="reservation-guests">{reservation.numGuests} Guests</div>
                                    <div className="reservation-price">$ {reservation.totalPrice}</div>
                                    <div className="reservation-edit">
                                        {/* <Link to={`reservations/${reservation.id}`}> */}
                                        <Link className="reservation-change-btn" to={{ pathname: `/users/reservations/${reservation.id}`, state: {reservation}}} >
                                            Change Reservation
                                        </Link>
                                        <br></br>
            
                                        <button id="reservation-cancel-btn" onClick={handleClick}>Cancel Reservation</button>
                                    </div>
                                </div>
                                    <div className="reservation-map">
                                        <MyMapListingComponent listing={reservation.listing}/>
                                    </div>
                                
                                </>
                          
            

            
                        </div>
                    </div>
    )
}


export default ReservationIndexItem
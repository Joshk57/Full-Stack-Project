import React, { useState, useEffect, useRef } from "react";
import { DateRangePicker} from "react-dates";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getListing, fetchListing } from "../../store/listings";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./calendar.css";
import dayjs from "dayjs";
// import ReservationIndex from "./ReservationIndex";
import { useHistory } from "react-router-dom";
import { deleteReservation, fetchReservation, getReservation, updateReservation } from "../../store/reservations";
import UpdateDatePicker from "./updatecalendar";
import { useLocation } from "react-router-dom";

const ReservationUpdatePage = () => {
    const dispatch = useDispatch();
    const { reservationId } = useParams();
    // const reservation = useSelector(getReservation(reservationId));
    
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState(null);
    const [guestCount, setGuestCount] = useState(1); // State for guest count
    const [isEditingGuestCount, setIsEditingGuestCount] = useState(false); // Track editing mode
    const guestCountInputRef = useRef(null);
    const currentUser = useSelector(state => state.session.user)
    const history = useHistory()
    const [errors, setErrors] = useState([])
    
    const location = useLocation()
    const { reservation } = location.state || {}


    
    useEffect(() => {
        dispatch(fetchReservation(reservationId))
    }, [dispatch, reservationId])

    const updateReservationData = (formData) => {
      dispatch(updateReservation(formData))

      history.push("/users/reservations")
    }
 
    return (

        <div className="reservations-update-container">
          <h2>Change Reservation:</h2>
          <div className="reservation-update">

            {reservation && <UpdateDatePicker listing={reservation.listing} reservation={reservation} updateReservationData={updateReservationData}/>}

          </div>
        </div>
  
    )

}

export default ReservationUpdatePage
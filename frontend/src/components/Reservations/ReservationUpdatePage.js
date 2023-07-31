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
import { updateReservation } from "../../store/reservations";

const ReservationUpdatePage = () => {
    const dispatch = useDispatch();
    const { listingId } = useParams();
    const listing = useSelector(getListing(listingId));
    
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState(null);
    const [guestCount, setGuestCount] = useState(1); // State for guest count
    const [isEditingGuestCount, setIsEditingGuestCount] = useState(false); // Track editing mode
    const guestCountInputRef = useRef(null);
    const currentUser = useSelector(state => state.session.user)
    const history = useHistory()
    const [errors, setErrors] = useState([])


    // const [selectedDate, setSelectedDate] = useState(null)

    useEffect(() => {
        dispatch(fetchListing(listingId))
    }, [dispatch, listingId])
    console.log(dispatch(fetchListing(listingId)))
    
    const isOutsideRange = (day) => {
        const today = new Date();
        return day.isBefore(today);
      };
    
      const calculateNumberOfNights = () => {
        if (startDate && endDate) {
          const start = dayjs(startDate);
          const end = dayjs(endDate);
          const numNights = end.diff(start, "day");
          return numNights;
        }
        return 0;
      };
    
      const totalPrice = () => {
        return listing.price * calculateNumberOfNights();
      };
    
    
      const handleGuestCountChange = (newCount) => {
        const maxGuests = listing.maxGuests; 
        const validGuestCount = Math.min(Math.max(1, newCount), maxGuests); 
        setGuestCount(validGuestCount);
      };
    
      const handleGuestCountEdit = () => {
        setIsEditingGuestCount(true);
      };
    
      const handleGuestCountBlur = () => {
        setIsEditingGuestCount(false);
      };
    
      const handleGuestCountInputChange = (event) => {
        const newCount = parseInt(event.target.value, 10);
        if (!isNaN(newCount)) {
          handleGuestCountChange(newCount);
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault()
    
        
        setErrors([])
        if (!startDate || !endDate || !guestCount) {
          setErrors(["Fill in all the fields"])
          return;
        }
    
        history.push('/reservations')
        const numNights = calculateNumberOfNights()
        const totalPrice = listing.price * numNights
    
        const formData = {
          listingId: listing.id,
          // reserverId: user.id,          <---- fix this when you're able to log in
          reserverId: 9,
          startDate: startDate,
          endDate: endDate,
          numGuests: guestCount,
          totalPrice: totalPrice
        }
    

    
        return dispatch(updateReservation(formData))
          .catch(async (response) => {
            let data;
            try {
              data = await response.clone().json();
            } catch {
              data = await response.text();
            }
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([response.statusText]);
          });
      }

      console.log("helloooooo")

    return (
        <>
        
        {listing && (
        // <div className="reservation-update-container">
        //     <div className="reservation-update">
        //         <h1 id="reservation-update-name">Cheap Place</h1>
        //         <div className="reservation-update-location">Brooklyn, New York</div>
        //         <div className="reservation-current-info">
        
                <form onSubmit={handleSubmit}>

                    <div className="App">
                    <div className="price-night">
                        <span>${listing.price} </span>night
                    </div>
                    <div className="date-range-picker-wrapper">
                        <div className="check-in-text">CHECK IN</div>
                        <div className="check-out-text">CHECK OUT</div>

                        <DateRangePicker
                        startDate={startDate}
                        startDateId="startDate"
                        endDate={endDate}
                        endDateId="endDate"
                        onDatesChange={({ startDate, endDate }) => {
                            setStartDate(startDate);
                            setEndDate(endDate);
                        }}
                        focusedInput={focusedInput}
                        onFocusChange={(focused) => setFocusedInput(focused)}
                        // showDefaultInputIcon
                        hideKeyboardShortcutsPanel
                        numberOfMonths={2}
                        orientation="horizontal"
                        minimumNights={1}
                        isOutsideRange={isOutsideRange}
                        />

                        <div className="guest-menu">
                        <div className="guest-container">
                            <div className="guest-label">GUESTS</div>
                            {isEditingGuestCount ? (
                            <input
                                type="number"
                                value={guestCount}
                                onChange={handleGuestCountInputChange}
                                onBlur={handleGuestCountBlur}
                                ref={guestCountInputRef}
                            />
                            ) : (
                            <div className="guest-count" onClick={handleGuestCountEdit}>
                                <span>{guestCount}</span> Guests
                            </div>
                            )}
                        </div>
                        </div>
                    </div>

                    <button type="submit" className="reserve-btn">
                        Update Reservation
                    </button>
                    <div className="price-calculation-container">
                        <div className="price-calculation">
                        ${listing.price} x {calculateNumberOfNights()} nights
                        <span>$ {totalPrice()}</span>
                        </div>
                        <div></div>
                    </div>
                    </div>
                </form>
        //         </div>
        //     </div>
            
        // </div>
        )}
        </>
    )

}

export default ReservationUpdatePage
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

// import { createReservation } from "../../store/reservations";
import { deleteReservation, updateReservation } from "../../store/reservations";

const UpdateDatePicker = ({listing, reservation, updateReservationData}) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { reservationId } = useParams()
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [guestCount, setGuestCount] = useState(reservation.numGuests || 1);
  // const [startDate, setStartDate] = useState(null)
  // const [endDate, setEndDate] = useState(null);
  // const [guestCount, setGuestCount] = useState(1); // State for guest count
  const [focusedInput, setFocusedInput] = useState(null);
  const [isEditingGuestCount, setIsEditingGuestCount] = useState(false); // Track editing mode
  const guestCountInputRef = useRef(null);
  const currentUser = useSelector(state => state.session.user)

  const [errors, setErrors] = useState([])



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
    const maxGuests = listing.max_guests; 
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
    
    history.push("/users/reservations/")
    const numNights = calculateNumberOfNights()
    const totalPrice = listing.price * numNights
    
    const formData = {
      id: reservationId,
      listingId: listing.id,
      startDate: startDate,
      endDate: endDate,
      numGuests: guestCount,
      totalPrice: totalPrice
    }
    
    // setStartDate("")                  <---------- reset data
    // setEndDate("")
    // setGuestCount(1)
    
    // console.log("maxGuests:", listing.max_guests)
    // console.log(listing.city)
    // return dispatch(createReservation({reservation: formData}))
    // .catch(async (response) => {
    //   let data;
    // //   debugger
    // try {
    //   data = await response.clone().json();
    // } catch {
    //   data = await response.text();
    // }
    // if (data?.errors) setErrors(data.errors);
    // else if (data) {
    //   setErrors([data]);
    // }
    // else setErrors([response.statusText]);
    // });
    return dispatch(updateReservation({reservation: formData}))
    .catch(async (response) => {
      let data;
    //   debugger
    try {
      data = await response.clone().json();
    } catch {
      data = await response.text();
    }
    if (data?.errors) setErrors(data.errors);
    else if (data) {
      setErrors([data]);
    }
    else setErrors([response.statusText]);
    });

    // return dispatch(updateReservation({reservation: formData}))
    // .then(() => {

    //   updateReservationData(formData);
    // })
    // .catch((response) => {
    //   if (response?.status === 400) {
    //     response.json().then((data) => {
    //       setErrors(data.message); 
    //     });
    //   } else {
    //     setErrors("An error occurred. Please try again later."); 
    //   }
    // });


  }


  return (
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
          Reserve
        </button>
        <div>
          {errors}
        </div>
        <div className="price-calculation-container">
          <div className="price-calculation">
            ${listing.price} x {calculateNumberOfNights()} nights
            <span>$ {totalPrice()}</span>
          </div>
          <div className="total-price">
            Total Price
            <span>$ {totalPrice()}</span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UpdateDatePicker;

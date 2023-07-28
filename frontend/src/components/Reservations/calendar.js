import React, { useState, useEffect, useRef } from "react";
import { DateRangePicker, isInclusivelyAfterDay } from "react-dates";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getListing, fetchListing } from "../../store/listings";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./calendar.css";
import dayjs from "dayjs";

const DatePicker = () => {
  const dispatch = useDispatch();
  const { listingId } = useParams();
  const listing = useSelector(getListing(listingId));
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const [guestCount, setGuestCount] = useState(1); // State for guest count
  const [isEditingGuestCount, setIsEditingGuestCount] = useState(false); // Track editing mode
  const guestCountInputRef = useRef(null);

  useEffect(() => {
    dispatch(fetchListing(listingId));
  }, [listingId]);

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

  const handleReserve = () => {

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

  return (
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

      <button className="reserve-btn" onClick={handleReserve}>
        Reserve
      </button>
      <div className="price-calculation-container">
        <div className="price-calculation">
          ${listing.price} x {calculateNumberOfNights()} nights
          <span>$ {totalPrice()}</span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default DatePicker;

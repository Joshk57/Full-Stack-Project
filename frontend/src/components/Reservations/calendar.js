import React, { useState } from "react";
import { DateRangePicker, isInclusivelyAfterDay } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./calendar.css";

const DatePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  const isOutsideRange = (day) => {
    const today = new Date();
    return day.toLocaleString() < today.toLocaleString();
  };
  const handleReserve = () => {

  }

  return (
    <div className="App">
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
        showDefaultInputIcon
        hideKeyboardShortcutsPanel
        numberOfMonths={2}
        orientation="horizontal"
        minimumNights={0}
        isOutsideRange={isOutsideRange}
      />
      {/* Add the Reserve button below the DateRangePicker */}
      <button className="reserve-btn" onClick={handleReserve}>Reserve</button>
    </div>
  );
};

export default DatePicker;

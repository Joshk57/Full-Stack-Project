import React, { useState } from "react";
import { DateRangePicker, isInclusivelyAfterDay } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

const DatePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  const isOutsideRange = (day) => {
    const today = new Date();
    return day.toLocaleString() < today.toLocaleString();
  };

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
    </div>
  );
};

export default DatePicker;

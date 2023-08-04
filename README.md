<h1>Introduction</h1>
Budgetbnb is a clone of Airbnb in which users can rent places to stay for a reasonable price. Airbnb is an online marketplace that provides short term and long term stays and experiences. Budgetbnb provides the same functionality and users can search for air bnbs by location or the name of the airbnb. Users are able to create, change or cancel reservations.


* Languages: Javascript, Ruby, HTML, and CSS
* Frontend: React, React-Redux, Google Maps JavaScript API
* Database: PostgreSQL
* Hosting: Render
* Asset Storage: AWS Simple Cloud Storage (S3)

<h1>Location</h1>
Users can click on the "Show map" button in the splash page which provides the user all the searched listings in a map with a price marker on the listing. The user can zoom in and out of the map to click on a specific listing which will lead them to the listing show page.
<br></br>
<img width="1257" alt="Screenshot 2023-08-04 144530" src="https://github.com/Joshk57/Full-Stack-Project/assets/126521511/890d100d-a577-4926-8137-a88b184154d2">
<h2>Code Snippet</h2>

```
const MyMapComponent = ({ listings }) => {

  const history = useHistory();
  const [hoveredMarkerId, setHoveredMarkerId] = useState(null);

  const containerStyle = {
    width: '100%',
    height: '100vh',
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY 
  });

  const center = {
    lat: 0,
    lng: 0,
  };

  const handleMarkerClick = (listingId) => {
    history.push(`/listings/${listingId}`);
  };

  const getPixelPositionOffset = (width, height) => ({
    x: -(width / 2),
    y: -(height / 2),
  });




  const handleMarkerMouseEnter = (listingId) => {

    return (e) => {
      e.preventDefault()
      setHoveredMarkerId(listingId);

    }
  };

  const handleMarkerMouseLeave = () => {
    setHoveredMarkerId(null);
  };

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={2.7} draggable={false}>
      {listings.map((listing) => (
        <>
        
        <OverlayView
          key={listing.id}
          position={{ lat: listing.latitude, lng: listing.longitude }}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          getPixelPositionOffset={getPixelPositionOffset}

        >
          <div
            className="overlay-marker"
            onClick={() => handleMarkerClick(listing.id)}
            onMouseLeave={handleMarkerMouseLeave}
            style={{
              borderRadius: '24px',
              padding: '10px',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
              fontSize: '14px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '27px',
              height: '9px',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
            }}
          >
            ${listing.price}
          </div>
        </OverlayView>
        </>
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
};

```

<h1>Reservations</h1>

Users are able to make reservations on the listing's show page by providing a check-in date, check-out date, and the number of guests on the calendar form. Then in the reservations index page, if users want to change a reservation, then can click change reservation which will lead them to a reservation edit page where they can re-enter their desired days and number of guests.
<br></br>
<img width="1206" alt="Screenshot 2023-08-04 144801" src="https://github.com/Joshk57/Full-Stack-Project/assets/126521511/eb0fabcc-ac40-44a9-bd3a-7426de3e7a65">
<img width="301" alt="Screenshot 2023-08-04 144814" src="https://github.com/Joshk57/Full-Stack-Project/assets/126521511/34614b31-54e6-4924-af6b-eea894424525">

<h3>Code Snippet</h3>

```
const UpdateDatePicker = ({listing, reservation, updateReservationData}) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { reservationId } = useParams()
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [guestCount, setGuestCount] = useState(reservation.numGuests || 1);
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
    

    return dispatch(updateReservation({reservation: formData}))
    .catch(async (response) => {
      let data;
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

```

<h1>Future Implementations</h1>

* Rating and reviews with CRUD functions
* Providing categories and more search capabilities
* CRUD functions for listings
* User show page

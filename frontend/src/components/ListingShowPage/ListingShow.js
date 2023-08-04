import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getListing, fetchListing } from "../../store/listings"
import AmenityIcon from "../Amenity/AmenityIcon"
import 'react-datepicker/dist/react-datepicker.css';
import "./ListingShow.css"
// import DatePicker from "../Reservations/calender"
import DateRangePicker from "../Reservations/calendar"
import { hoursToSeconds } from "date-fns"
// import MyMapComponent from "../Map"
import MyMapListingComponent from "../Map/MyMapListing"



const ListingShow = () => {
    const dispatch = useDispatch()
    const { listingId } = useParams()
    const listing = useSelector(getListing(listingId))
    const [selectedDate, setSelectedDate] = useState(null)

    // const host = useSelector((state) => Object.values(state.host).find((host) => host.id === listing.hostId))

    // const hostSelector = (state) => {
    //     if (listing) {
    //       const id = listing.hostId;
    //       const listingHost = state.hosts[id];
    //       return listingHost;
    //     }
    //   };
    //   const host = useSelector(hostSelector);
    useEffect(() => {
        dispatch(fetchListing(listingId))
    }, [listingId])
    

    return (
        <>
            {listing && (

                <div className="listing-show">
                    <div className="listing-heading-container">
                        <h1>{listing.name}</h1>
                        <p>{listing.city}, {listing.state}, {listing.country}</p>
                    </div>

                    <div className="picture-container">
                        <div className="main-picture">
                            <img src={listing.photoUrls[0]}></img>
                        </div>
                        <div className="sub-container">

                            <div className="sub-picture">
                                <img src={listing.photoUrls[1]}></img>
                            </div>
                            <div className="sub-picture">
                                <img src={listing.photoUrls[2]}></img>
                            </div>
                            <div className="sub-picture">
                                <img src={listing.photoUrls[3]}></img>
                            </div>
                            <div className="sub-picture">
                                <img src={listing.photoUrls[4]}></img>
                            </div>
                        </div>
                    </div>

                    <div className="listing-body-container">
                        <div className="listing-body">
                            <div className="listing-hosted-by">
                                {/* <p>Placeholder hosted by {host.first_name} {host.last_name}</p> */}
                                <p> Entire rental unit hosted by Paul </p>
                            </div>
                            <div className="listing-details">
                                <span>{listing.maxGuests} Guests</span>
                                <span> · </span>
                                <span>{listing.numBedrooms} Bedrooms</span>
                                <span> · </span>
                                <span>{listing.numBeds} Beds</span>
                                <span> · </span>
                                <span>{listing.numBathrooms} Bathrooms</span>
                                <br></br><br></br>
                            </div>
                            <br />
                            <div className="listing-description">
                                <span>{listing.description}</span>
                                <br></br><br></br>
                            </div>
                            <div className="amenities">
                                <h3>What this place offers</h3>
                                <div className="amenities-container">
                                    {
                                        listing.amenities?.map((amenity) =>
                                            <div className="amenity-icon" key={amenity.id}>
                                                <AmenityIcon amenity={amenity} />

                                            </div>
                                        )
                                    }
                                </div>
                                <div className="map-container">
                                    <span>Where you'll be</span>
                                    <div className="map">
                                        <MyMapListingComponent listing={listing} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="calendar-container">
                        <DateRangePicker/>
                    </div>

                    </div>
                </div>
            )}
        </>
    )
    
}
  



export default ListingShow
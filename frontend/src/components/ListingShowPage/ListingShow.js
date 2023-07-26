import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getListing, fetchListing } from "../../store/listings"
import "./ListingShow.css"

const ListingShow = () => {
    const dispatch = useDispatch()
    const {listingId} = useParams()
    const listing = useSelector(getListing(listingId))

    // const host = useSelector((state) => Object.values(state.host).find((host) => host.id === listing.hostId))

   
    useEffect(() => {
        dispatch(fetchListing(listingId))
    }, [listingId])

    return (
        <div className="listing-show">
            <div className="listing-heading-container">
                <h1>{listing.name}</h1>
                <p>{listing.city}, {listing.state}</p>
            </div>

            {/* <div className="listing-pictures-container">
                <div className="listing-pic1">
                    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-578897320179146437/original/05928ce6-01ff-4829-bcde-9670e2a03c22.jpeg?im_w=960"></img>
                </div>
                <div className="listing-side-pics1">
                    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-578897320179146437/original/bd30820b-5ce2-40f7-bd81-9b6cfa32be05.jpeg?im_w=720"></img>
                    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-578897320179146437/original/037b4837-ac41-43a6-8c08-8d97c606fe6d.jpeg?im_w=720"></img>
                </div>

                <div className="listing-side-pics2">
                    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-578897320179146437/original/4436c19b-0aea-48b6-8604-081652173c21.jpeg?im_w=720"></img>
                    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-578897320179146437/original/72872607-cb6f-4740-aeee-04ff04be3646.jpeg?im_w=720"></img>
                </div>
            </div> */}

            <div className="picture-container">
                <div className="main-picture">
                    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-578897320179146437/original/05928ce6-01ff-4829-bcde-9670e2a03c22.jpeg?im_w=960"></img>
                </div>
                <div className="sub-picture-container">
                    <div className="sub-picture">
                        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-578897320179146437/original/bd30820b-5ce2-40f7-bd81-9b6cfa32be05.jpeg?im_w=720"></img>
                    </div>
                    <div className="sub-picture">
                        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-578897320179146437/original/037b4837-ac41-43a6-8c08-8d97c606fe6d.jpeg?im_w=720"></img>
                    </div>
                </div>
                <div className="sub-picture-container">

                    <div className="sub-picture">
                        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-578897320179146437/original/4436c19b-0aea-48b6-8604-081652173c21.jpeg?im_w=720"></img>
                    </div>
                    <div className="sub-picture">
                        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-578897320179146437/original/72872607-cb6f-4740-aeee-04ff04be3646.jpeg?im_w=720"></img>
                    </div>
                </div>
            </div>
            

            <div className="listing-body-container">
                <div className="listing-body">
                    <div className="listing-hosted-by">
                        {/* <p>Placeholder hosted by {host.first_name} {host.last_name}</p> */}
                    </div>
                    <div className="listing-details">
                        <span>{listing.numBedrooms} Bedrooms</span>
                        <span>·</span>
                        <span>{listing.numBathrooms} Bathrooms</span>
                    </div>
                    <br/>
                    <span>{listing.description}</span>

                </div>
            </div>
        </div>
    )
}

export default ListingShow
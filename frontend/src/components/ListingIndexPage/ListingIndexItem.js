import { useDispatch } from "react-redux"
import { deleteListing } from "../../store/listings"
import { Link } from "react-router-dom"

const ListingIndexItem = (props) => {
    const dispatch = useDispatch()
    const listing = props.listing

    return (
        <div className="listing-index-container">
            <Link to={`listings/${listing.id}`}>
                <div className="listing-image">

                </div>
                <div className="listing-info">
                    <div className="listing-location">{listing.city}, {listing.state}</div>
                    <div className="listing-name">{listing.name}</div>
                    <div className="listing-price">{listing.price}</div>
                </div>
            </Link>
            
        </div>
    )
}

export default ListingIndexItem
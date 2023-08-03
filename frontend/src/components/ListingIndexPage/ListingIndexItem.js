import { useDispatch } from "react-redux"
import { deleteListing } from "../../store/listings"
import { Link } from "react-router-dom"

const ListingIndexItem = (props) => {
    const dispatch = useDispatch()
    const listing = props.listing

    return (
        <div className="listing-index-container">
            <Link className="listing-index-link" to={`listings/${listing.id}`}>
                <div className="listing-image">
                    <img className="pic" src={listing?.photoUrls}></img>
                </div>
                <div className="listing-info">
                    <div className="listing-location">{listing.city}, {listing.state}</div>
                    <div className="listing-name">{listing.name}</div>
                    <div className="listing-price"><span>${listing.price}</span> night</div>
                </div>
            </Link>
            
        </div>
    )
}

export default ListingIndexItem
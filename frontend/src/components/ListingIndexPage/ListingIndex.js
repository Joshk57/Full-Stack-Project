import { useDispatch, useSelector } from "react-redux"
import { getListings, fetchListings } from "../../store/listings"
import { useEffect } from "react"
import ListingIndexItem from "./ListingIndexItem"



const ListingIndex = () => {
    const dispatch = useDispatch()
    const listings = useSelector(getListings)

    useEffect(() => {
        dispatch(fetchListings())
    }, [dispatch])

    return (
        <div>
            {
                listings.map(listing => <ListingIndexItem listing={listing} key={listing.id}/>)
            }
        </div>

    )
}

export default ListingIndex
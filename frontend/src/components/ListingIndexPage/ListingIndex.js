// import { useDispatch, useSelector } from "react-redux"
// import { getListings, fetchListings } from "../../store/listings"
// import { useEffect, useState } from "react"
// import ListingIndexItem from "./ListingIndexItem"
// import "./ListingIndex.css"
// import MyMapComponent from "../Map"


// const ListingIndex = () => {
//     const dispatch = useDispatch()
//     const listings = useSelector(getListings)
//     const [showMap, setShowMap] = useState(false)

//     useEffect(() => {
//         dispatch(fetchListings())
//     }, [dispatch])

//     const handleClick = () => {

//     }
//     return (
//         <>
//         <div>
//             <button className="index-map" onClick={handleClick}>
//                 <span>Show map</span>
//             </button>
//         </div>
//         <div className="listings-index">
//             {
//                 listings.map(listing => <ListingIndexItem listing={listing} key={listing.id}/>)
//             }
//         </div>
//         </>

//     )
// }

// export default ListingIndex

import { useDispatch, useSelector } from "react-redux";
import { getListings, fetchListings } from "../../store/listings";
import { useEffect, useState } from "react";
import ListingIndexItem from "./ListingIndexItem";
import "./ListingIndex.css";
import MyMapComponent from "../Map/MyMap";

const ListingIndex = () => {
  const dispatch = useDispatch();
  const listings = useSelector(getListings);
  const [showMap, setShowMap] = useState(false); 
  useEffect(() => {
    dispatch(fetchListings());
  }, [dispatch]);

  const handleClick = () => {
    setShowMap(!showMap); 
  };

  return (
    <>
      <div>
        <button className="index-map" onClick={handleClick}>
          <span>Show map</span>
          <i class="fa-solid fa-map"></i>
        </button>
      </div>
      <div className="listings-index">
        {showMap ? ( 
          
          <MyMapComponent listings={listings} />
        ) : (
          listings.map((listing) => (
            <ListingIndexItem listing={listing} key={listing.id} />
          ))
        )}
      </div>
    </>
  );
};

export default ListingIndex;

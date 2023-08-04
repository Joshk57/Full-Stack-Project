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

const ListingIndex = ({searchResults}) => {
  const dispatch = useDispatch();
  const listings = useSelector(getListings);
  const [showMap, setShowMap] = useState(false); 
  const [buttonText, setButtonText] = useState("Show map");
  const items = searchResults || listings

  useEffect(() => {
    dispatch(fetchListings());
  }, [dispatch]);

  const handleClick = () => {
    setShowMap(!showMap); 
    setButtonText(showMap ? "Show map" : "Show list");
  };

  return (
    <>
      <div>
        <button className="index-map" onClick={handleClick}>
          <span>{buttonText}</span>
          {buttonText === "Show map" ? (
            <i className="fa-solid fa-map"></i>
     
          ) : <i class="fa-solid fa-list-ul"></i>}
        </button>
      </div>
      <div className="listings-index">
        {showMap ? ( 
          
          <MyMapComponent listings={items} />
        ) : (
          items.map((listing) => (
            <ListingIndexItem listing={listing} key={listing.id} />
          ))
        )}
      </div>
    </>
  );
};

export default ListingIndex;

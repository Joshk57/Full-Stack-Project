import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { fetchSearchResults } from "../../store/search";

import ListingIndex from "../ListingIndexPage/ListingIndex";

const SearchShowPage = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const searchParams = new URLSearchParams(location.search)
    const query = searchParams.get("query")
    const searchResults = useSelector(state => Object.values(state.search))

    useEffect(() => {
        if (query) {
            dispatch(fetchSearchResults(query))
        }
    }, [])
    return (
        <div id="search-page-container">
            {/* {searchResults.map(result => {
                return (
                    <ListingIndexItem listing={result}/>
                )
            })} */}

            <ListingIndex searchResults={searchResults}/>
        </div>
    )
}

export default SearchShowPage
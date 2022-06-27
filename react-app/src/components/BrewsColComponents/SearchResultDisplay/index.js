import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function SearchResultDisplay () {
    const brews = useSelector(state => state.brews);
    let { search } = useLocation();
    search = search.slice(6)

    const results = Object.entries(brews).filter(([id, brew]) => {
        //TODO check if search in tags (loop)
        return brew.title.includes(search) || brew.description.includes(search)
    })
    console.log('THESE ARE THE RESULTS', results)
    return (
        <h2>This is the BrewsColComponents - SearchResultDisplay Component</h2>
    )
}

export default SearchResultDisplay;

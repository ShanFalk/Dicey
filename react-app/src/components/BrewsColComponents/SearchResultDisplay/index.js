import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function SearchResultDisplay () {
    const brews = useSelector(state => state.brews);
    let { search } = useLocation();
    search = search.slice(6).toLowerCase()

    const results = Object.values(brews).filter((brew) => {
        //TODO check if search in tags (loop)
        return brew.title.toLowerCase().includes(search) || brew.description.toLowerCase().includes(search)
    })
    console.log('THESE ARE THE RESULTS', results)
    return (
        <>
        <h2>Results</h2>
        <div>
            {results.map((brew) => {
                return (
                    <div key={brew.id}>{brew.title}</div>
                )
            })}
        </div>
        </>
    )
}

export default SearchResultDisplay;

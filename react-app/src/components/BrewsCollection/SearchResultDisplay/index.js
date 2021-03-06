import React from "react";
import { useSelector } from "react-redux";
import FeaturedBrewsCollection from "../MainPageDisplay/FeaturedBrewsCollection";
import { useLocation, Link } from "react-router-dom";

function SearchResultDisplay () {
    const brews = useSelector(state => state.brews);

    let search = useLocation().search;
    let tagId = new URLSearchParams(search).get('tagId');
    tagId = parseInt(tagId, 10);
    search = search.split('&tagId=')[0].slice(6).toLowerCase().split(' ');

    const results = Object.values(brews).filter((brew) => {
        if (tagId) {
            for (let tag of brew.brew_tags) {
                if (tag.id === tagId) return true;
            }
        }

        for (let term of search) {
            if (brew.title.toLowerCase().includes(term) || brew.description.toLowerCase().includes(term)) {
                return true;
            }
            for (let tag of brew.brew_tags) {
                if (tag.name.toLowerCase().includes(term)) return true;
            }
        }
    })

    return (
        <>
        <h2>Results</h2>
        <div>
            {results.length === 0 && (<h3>Sorry, nothing found</h3>)}
            <div className="grid">
                {results.map((brew) => {
                    return (
                        <div className='brew-card-link' key={brew.id}>
                            <Link to={`/brews/${brew.id}`} brew={brew} className="no-decor">
                            <FeaturedBrewsCollection key={brew.id} brew={brew} />
                            </Link>
                        </div>
                    );
                })}

            </div>
        </div>
        </>
    )
}

export default SearchResultDisplay;

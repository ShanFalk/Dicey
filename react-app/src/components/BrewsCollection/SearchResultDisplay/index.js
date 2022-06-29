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

    console.log("RESULTS", results)

    return (
        <>
        <h2>Results</h2>
        <div>
            {/* {results.map((brew) => {
                return (
                    <div key={brew.id}>{brew.title}</div>
                )
            })} */}

        {results.map((brew) => {
          return (
          <div className='brew-card-link' key={brew.id}>
            <Link to={`/brews/${brew.id}`} brew={brew} className="room-nav-link">
              <FeaturedBrewsCollection key={brew.id} brew={brew} />
            </Link>
          </div>
      );
    })}
        </div>
        </>
    )
}

export default SearchResultDisplay;

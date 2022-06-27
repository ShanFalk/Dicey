import React, {useState} from "react";
import { useHistory } from 'react-router-dom';
import "./search.css"

function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();

        history.push(`/search?term=${searchTerm}`)
    }

    return (
        <>
            <form className="search-form" onSubmit={onSubmit}>
                <input className="search-input"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    type="search"
                    name="term"
                    placeholder="Search for anything">
                </input>
                <button className="search-button">
                    Search
                </button>
            </form>
        </>
    )
}

export default Search;

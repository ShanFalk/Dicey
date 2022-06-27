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
                <div className="search-wrapper">
                    <input className="search-input"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        type="search"
                        name="term"
                        placeholder="Search for anything">
                    </input>
                    <button className="search-button">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </form>
        </>
    )
}

export default Search;

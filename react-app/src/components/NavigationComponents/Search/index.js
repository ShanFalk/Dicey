import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();

        //TODO: write searchBrews in store
        dispatch(searchBrews(searchTerm))
            .then(history.push(`/search?term=${searchTerm}`))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    return (
        <>
            <div className="search-bar">
                <form className="search-form" onSubmit={onSubmit}>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
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
            </div>
        </>
    )
}

export default Search;

import BrewUpdateForm from "../BrewUpdateForm";
import { useSelector } from "react-redux";
import { useEffect, useState} from 'react'

function BrewDetails ({brew, setShowEditForm}) {
    const sessionUser = useSelector(state => state.session.user);


    return (
        <div>
            <h2>This is the BrewSingleComponents - BrewDetails Component</h2>
            <h3>Title: {brew?.title}</h3>
            <p>Description: {brew?.description}</p>
            <a href={brew?.pdf_url} download="true">Download</a>
            <p>User: {brew?.user_id}</p>
            <p>Price: {brew?.price}</p>
            <p>Tags: {brew?.brew_tags}</p>
            <button onClick={() => setShowEditForm(true)}>Show Edit Form</button>
        </div>

    )
}

export default BrewDetails;

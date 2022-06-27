import BrewDetails from "../BrewDetails";
import ReviewsSection from "../../ReviewComponents/ReviewsSection";
import React, { useEffect, useState }  from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


function BrewPage () {
    const sessionUser = useSelector(state => state.session.user);
    const { brewId } = useParams();

    const brews = useSelector(state => state.brews?.brews)

    const brew = brews[brewId - 1]

    
    return (
        <div>
            <h2>This is the BrewSingleComponents - BrewPage Component</h2>
            <div>
        <h1>{brew?.title}</h1>
        <p>{brew?.description}</p>
    </div>
            <BrewDetails />
            <ReviewsSection />
        </div>

    )
}
export default BrewPage;

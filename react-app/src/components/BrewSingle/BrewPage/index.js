import BrewDetails from "../BrewDetails";
import ReviewsSection from "../Review/ReviewsSection";
import BrewUpdateForm from "../BrewUpdateForm";
import React, { useEffect, useState }  from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


function BrewPage () {
    const sessionUser = useSelector(state => state.session.user);
    const { brewId } = useParams();
    const [showEditForm, setShowEditForm] = useState(false)

    const brew = useSelector(state => state.brews[brewId])

    if(showEditForm){
        return (
            <BrewUpdateForm setShowEditForm={setShowEditForm} brew={brew}/>
        )
    }


return (
    <div>
        <BrewDetails setShowEditForm={setShowEditForm} brew={brew} />
        <ReviewsSection brew={brew} />
    </div>
)
}
export default BrewPage;

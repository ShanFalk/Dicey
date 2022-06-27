import React, { useEffect, useState }  from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function BrewPage() {
    const sessionUser = useSelector(state => state.session.user);
    const { brewId } = useParams();

    const brews = useSelector(state => state.brews?.brews)

    const brew = brews[brewId - 1]

    console.log(brew)
    
    return (
    <div>
        <h1>{brew?.title}</h1>
        <p>{brew?.description}</p>
    </div>
  )
}

export default BrewPage

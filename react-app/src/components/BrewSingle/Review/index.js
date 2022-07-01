import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import './reviews.css'
import EditReview from "./EditReview";
import StarsRating from 'react-star-rate';
import convertToTimeAgo from '../../../utils/relative-time.js'


function Review ({review, user }) {
    const sessionUser = useSelector(state => state.session.user);
    const [showReviewEdit, setReviewEdit] = useState(false)


    return (
        <div className="review-container">

            {showReviewEdit ? <EditReview review={review} setReviewEdit={setReviewEdit}/> :
            <div className="review-content-display">
            {(<StarsRating classNamePrefix="star-rating" disabled={true} value={review?.rating} />)}
            <div className="comment-content-box">{review.content}</div>
            </div>}

            <div className="bottom-details"><div>{user?.username}{"----"}{convertToTimeAgo(review.created_at)}</div>
            {sessionUser && sessionUser?.id === review.user_id && showReviewEdit && (
                <button className="cancel button" onClick={() => setReviewEdit(!showReviewEdit)}>Cancel Edit</button>
            )}{sessionUser && sessionUser?.id === review.user_id && !showReviewEdit && (
                <button className="purple button" onClick={() => setReviewEdit(!showReviewEdit)}>Edit</button>
            )}</div>

        </div>
    )
}

export default Review;

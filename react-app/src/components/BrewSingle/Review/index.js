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






    // moment("20111031", "YYYYMMDD").fromNow(); // 11 years ago
    // moment("20120620", "YYYYMMDD").fromNow(); // 10 years ago
    // moment().startOf('day').fromNow();        // 9 hours ago
    // moment().endOf('day').fromNow();          // in 15 hours
    // moment().startOf('hour').fromNow();

    return (
        <div className="review-container">
            <div>User: {user?.username}, Date: {review.created_at}
            {sessionUser && sessionUser?.id === review.user_id && (
                <button onClick={() => setReviewEdit(!showReviewEdit)}>{!showReviewEdit ? "Edit Review" : "Cancel Edit" }</button>
            )}</div>
            {showReviewEdit ? <EditReview review={review} setReviewEdit={setReviewEdit}/> :
            <div>
            <p>Rating: {(<StarsRating disabled={true} value={review?.rating} />)}</p>
            <p>Comment: {review.content}</p>
            </div>}

        </div>
    )
}

export default Review;

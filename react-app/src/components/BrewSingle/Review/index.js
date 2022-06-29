import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import './reviews.css'
import EditReview from "./EditReview";

function Review ({review }) {
    const sessionUser = useSelector(state => state.session.user);
    const [showReviewEdit, setReviewEdit] = useState(false)
    

    return (
        <div className="review-container">
            <div><p>User: {review.user_id}, Date: {review.created_at}</p>
            {sessionUser && sessionUser.id === review.user_id && (
                <button onClick={() => setReviewEdit(!showReviewEdit)}>{!showReviewEdit ? "Edit Review" : "Cancel Edit" }</button>
            )}</div>
            {showReviewEdit ? <EditReview review={review} setReviewEdit={setReviewEdit}/> :
            <div>
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.content}</p>
            </div>}

        </div>
    )
}

export default Review;

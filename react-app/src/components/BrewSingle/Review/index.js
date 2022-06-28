import React from "react";
import { useSelector } from "react-redux";

function Review ({review, setReviewEdit}) {
    const sessionUser = useSelector(state => state.session.user);

    return (
        <div>
            <h3></h3>
            <p>Comment: {review.content}</p>
            <p>Rating: {review.rating}</p>
            {sessionUser.id === review.user_id && (
                <button onClick={() => setReviewEdit(true)}>Edit Review</button>
            )}
        </div>
    )
}

export default Review;

import Review from "../index";
import ReviewForm from "../ReviewForm";
import {useState} from 'react'
import EditReview from "../EditReview";

function ReviewsSection ({brew}) {
    const [reviewEdit, setReviewEdit] = useState(false)

    if (reviewEdit){
        return (
            <EditReview  setReviewEdit={setReviewEdit}/>
        )
    }

    return (
        <div>
            <h3>Reviews</h3>
            {brew?.reviews.map(review => {
                return (
                <Review key={review.id} review={review} setReviewEdit={setReviewEdit} />
                )
            })}

            <ReviewForm />
        </div>
    )
}

export default ReviewsSection;

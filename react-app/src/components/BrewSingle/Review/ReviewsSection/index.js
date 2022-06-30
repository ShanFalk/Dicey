import Review from "../index";
import ReviewForm from "../ReviewForm";
import {useState} from 'react'
import EditReview from "../EditReview";
import StarsRating from 'react-star-rate';
import { useSelector } from "react-redux";

function ReviewsSection ({brew}) {
    const sessionUser = useSelector(state => state.session.user);
    const [showCreateReviewField, setCreateReviewField] = useState(false)
    const users = useSelector(state => state.users);

    //Initializing Variables Used in Reviews Display
    let reviews;
    let numOfReviews;
    let sumOfRatings;
    let averageRating;
    let user;

    //When/if a brew is threaded, this code block will set values the the above variables.
    if (brew)  {
    reviews = brew.reviews;
    numOfReviews = reviews.length;
    sumOfRatings = reviews.reduce((sum, review) => {
        return sum += review.rating
    }, 0);
    averageRating = sumOfRatings / numOfReviews || "No Reviews";
    }




    return (
        <div className="review-table">
            <div>
            <h3>{numOfReviews} Reviews - <StarsRating
                  value={averageRating}
                  disabled={true}/> {averageRating}</h3>
            {sessionUser &&
            <button onClick={() => setCreateReviewField(!showCreateReviewField)}>Add Review</button>
            }
            </div>
            {showCreateReviewField &&
            <ReviewForm setCreateReviewField={setCreateReviewField} brew_id={brew?.id}/>
            }
            {brew?.reviews.map(review => {
                return (
                    {users} && <Review key={review.id} review={review} user={users[review.user_id]}  />
                )
            })}
        </div>
    )
}

export default ReviewsSection;

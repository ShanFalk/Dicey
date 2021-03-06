import Review from "../index";
import ReviewForm from "../ReviewForm";
import {useState} from 'react'
import EditReview from "../EditReview";
import StarsRating from 'react-star-rate';
import { useSelector } from "react-redux";
import '../reviews.css';

function ReviewsSection ({brew}) {
    const sessionUser = useSelector(state => state.session.user);
    const purchases = useSelector(state => state.purchases);
    const [showCreateReviewField, setCreateReviewField] = useState(false)
    const users = useSelector(state => state.users);

    //Initializing Variables Used in Reviews Display
    let reviews;
    let numOfReviews;
    let sumOfRatings;
    let averageRating;

    //When/if a brew is threaded, this code block will set values the the above variables.
    if (brew)  {
    reviews = brew.reviews;
    numOfReviews = reviews.length;
    sumOfRatings = reviews.reduce((sum, review) => {
        return sum += review.rating
    }, 0);
    if (numOfReviews) {
        averageRating = sumOfRatings / numOfReviews;
    } else {
        averageRating = null;
    }
    }




    return (
        <div className="review-table">
            <div className="review-section-header"><div className="header-details">
            <h3>{numOfReviews} Reviews </h3> <StarsRating
                  classNamePrefix="star-rating"
                  value={averageRating? averageRating : 5}
                  disabled={true}/></div>
            {sessionUser && purchases[brew.id] &&
            <button className="purple button" onClick={() => setCreateReviewField(!showCreateReviewField)}>Add Review</button>
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

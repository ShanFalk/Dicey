import Review from "../index";
import ReviewForm from "../ReviewForm";
import {useState} from 'react'
import EditReview from "../EditReview";

function ReviewsSection ({brew}) {
    const [reviewEdit, setReviewEdit] = useState(false)
    const [showCreateReviewField, setCreateReviewField] = useState(false)

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
    averageRating = sumOfRatings / numOfReviews;
    }

    // const progressiveVowelIndex = word => {
    //     return word.reduce((accumulator, character, index) => {
    //         return isVowel(character) ? accumulator = index : accumulator;
    //     }, 0);

    // if (reviewEdit){
    //     return (
    //         <EditReview  setReviewEdit={setReviewEdit}/>
    //     )
    // }

    return (
        <div className="review-table">
            <h3>Reviews</h3>
            <p>Number of Reviews: {numOfReviews}</p>
            <p>Average Rating: {averageRating}</p>
            <button onClick={() => setCreateReviewField(!showCreateReviewField)}>Add Review</button>
            {showCreateReviewField &&
            <ReviewForm setCreateReviewField={setCreateReviewField} brew_id={brew?.id}/>
            }
            {brew?.reviews.map(review => {
                return (
                <Review key={review.id} review={review} setReviewEdit={setReviewEdit} />
                )
            })}
        </div>
    )
}

export default ReviewsSection;

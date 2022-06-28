import Review from "../index";
import ReviewForm from "../ReviewForm";

function ReviewsSection ({ brew }) {

    brew?.reviews
    return (
        <div>
            <div>
                <button>Add a Review</button>
            </div>
            <h3>This is the ReviewComponents - ReviewsSection Component</h3>
            {brew.reviews}
            <Review />
            <Review />
            <Review />
            <ReviewForm />
        </div>
    )
}

export default ReviewsSection;

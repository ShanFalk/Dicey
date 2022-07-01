import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState} from 'react'
import { addReviewToBrew } from '../../../../store/brew';
import StarsRating from 'react-star-rate';
import '../reviews.css'

function ReviewForm ({setCreateReviewField, brew_id}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    // const [value, setValue] = useState(0);

    const [user_id, setUser_id] = useState(sessionUser?.id);
    const [content, setContent] = useState("");
    const [rating, setRating] = useState(0);
    const [errors, setErrors] = useState([]);


    const updateContent = (e) => setContent(e.target.value);
    const updateRating = (e) => setRating(e.target.value);

    const handleCancelClick = (e) => {
        e.preventDefault();
        setRating("")
        setContent("")
        setErrors([])
        setCreateReviewField(false)
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);

        const payload = {
            brew_id,
            content,
            rating,
            user_id,
        };

        let createdReview = await dispatch(addReviewToBrew(payload)).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
        });

        setRating("")
        setContent("")
        setErrors([])
        setCreateReviewField(false)
    }


    return (
        <div className='create-review-form'>
            <form className='' onSubmit={handleSubmit}>

                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>

                <div>
                <StarsRating
                    value={rating}
                    onChange={value => {
                    setRating(value);
                    }}/>
                </div>

                {/* <input
                type="number"
                placeholder="Rating"
                value={rating}
                min="0"
                max="5"
                required
                className='input rating-input'
                onChange={updateRating} /> */}

                <textarea
                placeholder="Content"
                value={content}
                required
                className='input review-textarea'
                onChange={updateContent} />

                <button className='' type="submit">Create Review</button>
                <button className='' type="button" onClick={handleCancelClick}>Cancel</button>
            </form>

        </div>

    )
}

export default ReviewForm;
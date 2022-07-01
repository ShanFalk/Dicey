import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState} from 'react'
import { addReviewToBrew } from '../../../../store/brew';
import StarsRating from 'react-star-rate';
import '../reviews.css'
import '../../../../form.css'

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

        let data = await dispatch(addReviewToBrew(payload));
        console.log("********", data.errors)
        if (data && data.errors) {
            let modified_error_messages = []
            data.errors.forEach(error => {
                let splitError = error.split(": ")
                modified_error_messages.push(splitError[1])
            });
            console.log(modified_error_messages)
            setErrors(modified_error_messages)
        } else {
            setRating("")
            setContent("")
            setErrors([])
            setCreateReviewField(false)
        }
    }


    return (
        <div className='create-review-form'>
            <form className='' onSubmit={handleSubmit}>

            {errors.length > 0 && <ul className='errors'>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>}

                <div>
                <StarsRating
                    value={rating}
                    onChange={value => {
                    setRating(value);
                    }}/>
                </div>

                <textarea
                placeholder="Your review..."
                value={content}
                maxLength={260}
                // required
                className='input review-textarea'
                onChange={updateContent} />

                <button className='button purple' type="submit">Create Review</button>
                <button className='button cancel' type="button" onClick={handleCancelClick}>Cancel</button>
            </form>

        </div>

    )
}

export default ReviewForm;
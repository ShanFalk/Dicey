import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState} from 'react'
import { updateReviewOnBrew, deleteReview } from '../../../store/brew';
import StarsRating from 'react-star-rate';
import './reviews.css';


function EditReview({review, setReviewEdit}) {
      const dispatch = useDispatch();
      const sessionUser = useSelector(state => state.session.user);

      const [content, setContent] = useState(review?.content);
      const [rating, setRating] = useState(review?.rating);
      const [errors, setErrors] = useState([]);


      const updateContent = (e) => setContent(e.target.value);
      const updateRating = (e) => setRating(e.target.value);

      const handleCancelClick = (e) => {
        e.preventDefault();
        setRating("")
        setContent("")
        setErrors([])
        setReviewEdit(false)
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);

        const payload = {
            id: review.id,
            brew_id: review.brew_id,
            content,
            rating,
            user_id:review.user_id,
        };

        let data = await dispatch(updateReviewOnBrew(payload));
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
            setReviewEdit(false)
        }
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        setErrors([]);

        let deleteFeedback = await dispatch(deleteReview(review.id, review.brew_id)).catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
          });

        console.log(deleteFeedback)
    }

  return (
      <div>
        <form className='' onSubmit={handleSubmit}>

        {errors.length > 0 && <ul className='errors'>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>}
        <div className='review-content-display'>
          <div>
              <StarsRating
                  classNamePrefix="star-rating"
                  value={rating}
                  onChange={value => {
                  setRating(value);
              }}/>
          </div>


          <textarea
          value={content}
          // required
          className='input review-textarea'
          onChange={updateContent} />
          </div>
          <div className='button-row'>
            <button className="purple button" type="submit">Submit Edit</button>
            <button className="red button" type="button" onClick={handleDelete}>Delete Review</button>
          </div>
      </form>
    </div>
  )
}

export default EditReview

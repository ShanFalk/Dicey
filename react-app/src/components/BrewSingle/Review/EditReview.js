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

        let createdReview = await dispatch(updateReviewOnBrew(payload)).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
        });

        setRating("")
        setContent("")
        setErrors([])
        setReviewEdit(false)
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

          <ul>
              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
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
          required
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

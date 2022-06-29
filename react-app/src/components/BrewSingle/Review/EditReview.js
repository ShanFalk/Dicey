import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState} from 'react'
import { updateReviewOnBrew } from '../../../store/brew';


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

        console.log(createdReview)

        setRating("")
        setContent("")
        setErrors([])
        setReviewEdit(false)
    }

  return (
      <div>
        <form className='' onSubmit={handleSubmit}>

          <ul>
              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>

          <input
          type="number"
          // placeholder="Rating"
          value={rating}
          min="0"
          max="5"
          required
          className='input rating-input'
          onChange={updateRating} />

          <textarea
          // placeholder="Content"
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

export default EditReview

import React from 'react'

function EditReview({review, setReviewEdit}) {
    

    const handleCancelClick = (e) => {
        e.preventDefault();
        setReviewEdit(false)
      };

  return (
      <div>
    <div>Edits happening</div>
    <form>
        
    </form>
    <button onClick={handleCancelClick}>Cancel</button>
    </div>
  )
}

export default EditReview

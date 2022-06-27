import React from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState} from 'react'
import { updateBrew} from'../../../store/brew'

function BrewUpdateForm({brew, setShowEditForm}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const [errors, setErrors] = useState([]);


//   const allTags = [{id: 1, name: 'Classic'}, {id: 2, name: 'Sci-fi'}, {id: 3, name: 'Comedy'}]

  const [title, setTitle] = useState(brew?.title);
  const [description, setDescription] = useState(brew?.description);
//   const [pdfUrl, setPdfUrl] = useState("");
//   const [imgUrl, setImgUrl] = useState(null);
  const [price, setPrice] = useState(brew?.price);
//   const [tags, setTags] = useState("");



  const updateTitle = (e) => setTitle(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);
//   const updateTags = (e) => setTags(...tags, e.target.value);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    const payload = {
        id: brew.id,
        description,
        title,
        price,
    //   pdf_url: pdfUrl,
    //   img_url: imgUrl,
    //   tags,
    //   user_id: sessionUser.id
        };

// const payload = {
//   description: "really sweet",
//   title: "sweet brew",
//   pdf_url: "",
//   price: 25.00,
//   img_url: "",
//   tags,
//   user_id: sessionUser.id
// };

let updatedBrew = await dispatch(updateBrew(payload)).catch(async (res) => {
  const data = await res.json();
  if (data && data.errors) setErrors(data.errors);
});
if (updatedBrew) {
    setShowEditForm(false)
}
}

// const updateImage = (e) => {
//   const file = e.target.files[0]
//   setImgUrl(file)
// }

// const updatePdf = (e) => {
//   const pdf = e.target.files[0]
//   setPdfUrl(pdf)
// }

const handleCancelClick = (e) => {
    e.preventDefault();
    setShowEditForm(false);
  };


  return (
    <div className="">
    <h1>Update your Brew</h1>
      <form className='' onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
        <input
        type="text"
        placeholder="Title"
        required
        className='input'
        value={title}
        onChange={updateTitle} />

        <input
        type="text"
        placeholder="Description"
        required
        className='input'
        value={description}
        onChange={updateDescription} />

        {/* <input
        type="file"
        placeholder="Pdf Upload"
        // required
        accept='application/pdf'
        className='input'
        onChange={updatePdf} />

        <input
        type="file"
        placeholder="Image Upload"
        // required
        accept='image/*'
        className='input'
        onChange={updateImage} /> */}

        <input
        type="number"
        placeholder="Price"
        value={price}
        min="0"
        required
        className='input'
        onChange={updatePrice} />
        {/* {allTags.map((tag) => {
            return (
              <>
              <label>{tag.name}</label>
            <input
            value={tag.name}
            type="radio"
            id={tag.id}
            onClick={updateTags}
            />
            </>
            )
          })} */}
      <button className='' type="submit">Update Brew</button>
      <button className='' type="button" onClick={handleCancelClick}>Cancel</button>
      <button onClick={() => setShowEditForm(false)}>Hide Edit Form</button>
    </form>
  </div>
  )
}

export default BrewUpdateForm;

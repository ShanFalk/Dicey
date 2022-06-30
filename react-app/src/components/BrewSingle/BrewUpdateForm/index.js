import React from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState} from 'react'
import { updateBrew, deleteBrew} from'../../../store/brew'

function BrewUpdateForm({brew, setShowEditForm}) {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const allTags = Object.values(useSelector(state => state.tags));

  const [errors, setErrors] = useState([]);



  const [title, setTitle] = useState(brew?.title);
  const [description, setDescription] = useState(brew?.description);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [imgs, setImgs] = useState(new Object());
  const [price, setPrice] = useState(brew?.price);
  const [tags, setTags] = useState(brew?.brew_tags.map((tag) => tag.id.toString()));



  const updateTitle = (e) => setTitle(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);
  const updateTags = (e) => {
    if (tags.indexOf(e.target.value) !== -1) {
      tags.splice(tags.indexOf(e.target.value), 1)
      return setTags([...tags])
    }
    else return setTags([...tags, e.target.value])
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    const payload = {
        id: brew.id,
        description,
        title,
        price,
        pdf_url: pdfUrl,
        imgs,
        brew_tags: tags,
        user_id: sessionUser.id
    };

    let updatedBrew = await dispatch(updateBrew(payload)).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
    if (updatedBrew) {
        setShowEditForm(false)
    }
  }

  const updateImages = (e, i) => {
    const file = e.target.files[0];
    if (brew.images[i-1]) {
      imgs[`E-${brew.images[i-1].id}`] = file;
    } else {
      imgs[i.toString()] = file;
    }
    console.log(imgs);
    setImgs({ ...imgs });
  }

  const updatePdf = (e) => {
    const pdf = e.target.files[0]
    setPdfUrl(pdf)
  }

  const handleCancelClick = (e) => {
    e.preventDefault();
    setShowEditForm(false);
  };

  const handleDelete = (e) => {
    const data = dispatch(deleteBrew(brew.id))
    history.push("/")
  }


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

        <label for="pdf">
          PDF
        </label>
        <input
          type="file"
          placeholder="Pdf Upload"
          // required
          accept='application/pdf'
          className='input'
          name='pdf'
          onChange={updatePdf} />
        <label for="img1">
          Image 1
        </label>
        <input
          type="file"
          placeholder="Image Upload 1"
          // required
          accept='image/*'
          className='input'
          name="img1"
          onChange={(e) => updateImages(e, 1)} />
        <label for="img2">
          Image 2
        </label>
        <input
          type="file"
          placeholder="Image Upload 2"
          // required
          accept='image/*'
          className='input'
          name='img2'
          onChange={(e) => updateImages(e, 2)} />
        <label for="img3">
          Image 3
        </label>
        <input
          type="file"
          placeholder="Image Upload 3"
          // required
          accept='image/*'
          className='input'
          name='img3'
          onChange={(e) => updateImages(e, 3)} />

        <input
          type="number"
          step="0.01"
          placeholder="Price"
          value={price}
          min="0.01"
          max="9.99"
          required
          className='input'
          onChange={updatePrice} />

        <h2>Tags:</h2>
        {allTags.map((tag) => {
          return (
            <div className='tagholder' key={tag.id}>
              <label for={tag.name}>{tag.name}</label>
              <input
                value={tag.id}
                type="checkbox"
                id={tag.id}
                onClick={updateTags}
                name={tag.name}
                className="checkbox"
                defaultChecked={tags.includes(tag.id.toString())}
              />
            </div>
          )
        })}
      <button className='button purple' type="submit">Update Brew</button>
      <button className='button cancel' type="button" onClick={handleCancelClick}>Cancel</button>
      <button className='button red' type='button' onClick={handleDelete}>Delete Brew</button>
    </form>
  </div>
  )
}

export default BrewUpdateForm;

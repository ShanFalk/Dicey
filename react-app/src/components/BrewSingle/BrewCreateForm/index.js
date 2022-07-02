import React from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState} from 'react'
import {createBrew} from'../../../store/brew'
import '../../../form.css'

function BrewCreateForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const allTags = Object.values(useSelector(state => state.tags));
  const [errors, setErrors] = useState([]);


  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pdfUrl, setPdfUrl] = useState(null);
  const [imgs, setImgs] = useState(new Object());
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState([]);



  const updateTitle = (e) => setTitle(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);
  const updateTags = (e) => {
    if(tags.indexOf(e.target.value) !== -1) {
      tags.splice(tags.indexOf(e.target.value), 1)
      return setTags([...tags])
    }
    else return setTags([...tags, e.target.value])
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    if (title.length < 3 || title.length > 255) {
      setErrors([...errors, 'Title length must be at least 3 and less than 255']);
    }

    if (!tags.length) {
      setErrors([...errors, 'Must select at least one tag']);
    }

    if (errors.length) return;

    const payload = {
      description,
      title,
      pdf_url: pdfUrl,
      price,
      imgs,
      brew_tags: tags,
      user_id: sessionUser.id
    };

    let createdBrew = await dispatch(createBrew(payload)).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });

    if (createdBrew) {
      history.push(`/brews/${createdBrew.id}`)
    }
}

  const updateImages = (e, i) => {
    const file = e.target.files[0]
    imgs[i.toString()] = file
    setImgs({...imgs })
  }

  const updatePdf = (e) => {
    const pdf = e.target.files[0]
    setPdfUrl(pdf)
  }



const handleCancelClick = (e) => {
    e.preventDefault();
    history.push(`/`)
    
  };


  return (
    <div className="create form">
    <h1>Add your Brew</h1>
      <form className='form' onSubmit={handleSubmit}>
        {errors.length > 0 && <ul className='errors'>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>}
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
        required
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
        required
        accept='image/*'
        className='input'
        name='img1'
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
              name={tag.name}
              id={tag.id}
              className="checkbox"
              onClick={updateTags}
            />
          </div>
          )
        })}
      <button className='button purple' type="submit">Create Brew</button>
      <button className='button cancel' type="button" onClick={handleCancelClick}>Cancel</button>
    </form>
  </div>
  )
}

export default BrewCreateForm

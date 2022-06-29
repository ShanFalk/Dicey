import React from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState} from 'react'
import {createBrew} from'../../../store/brew'

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
    console.log('HERE', tags)
    console.log('HERE')
    console.log('IMGS', imgs)

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
    console.log('HERE', imgs)
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
    <div className="">
    <h1>Add your Brew</h1>
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
      <input
        type="file"
        placeholder="Pdf Upload"
        required
        accept='application/pdf'
        className='input'
        onChange={updatePdf} />
      <input
        type="file"
        placeholder="Image Upload 1"
        required
        accept='image/*'
        className='input'
        onChange={(e) => updateImages(e, 1)} />
      <input
        type="file"
        placeholder="Image Upload 2"
        // required
        accept='image/*'
        className='input'
        onChange={(e) => updateImages(e, 2)} />
      <input
        type="file"
        placeholder="Image Upload 3"
        // required
        accept='image/*'
        className='input'
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
      {allTags.map((tag) => {
        return (
          <div key={tag.id}>
            <label>{tag.name}</label>
            <input 
              value={tag.id}
              type="checkbox"
              id={tag.id}
              onClick={updateTags}
            />
          </div>
          )
        })}
      <button className='' type="submit">Create Brew</button>
      <button className='' type="button" onClick={handleCancelClick}>Cancel</button>
    </form>
  </div>
  )
}

export default BrewCreateForm

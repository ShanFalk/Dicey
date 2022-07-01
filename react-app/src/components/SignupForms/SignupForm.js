import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp, login } from '../../store/session';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [bio, setBio] = useState("")
  const [img, setImg] = useState(null);
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignup = async (e) => {
    e.preventDefault();
    if(password === repeatPassword){
    const data = await dispatch(signUp(username, email, password, bio, img));
    if (data) {
      setErrors(data);
    }
  }
  };

  const handleDemo = (e) => {
    e.preventDefault();
    
    return dispatch(login("demo@aa.io",'password'))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  const updateImage = (e) => {
    const img = e.target.files[0]
    setImg(img)
  }

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignup}>
      {errors.length > 0 && <ul className='errors'>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>}
      <div>
        <label htmlFor='username'>Username:</label>
        <input
          name='username'
          type='text'
          placeholder='Username'
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='email'>Email:</label>
        <input
          name='email'
          type='text'
          placeholder='Email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
      <label>Bio</label>
        <input
          type='text'
          name='bio'
          placeholder='Bio'
          onChange={(e) => setBio(e.target.value)}
          value={bio}
          required
        ></input>
      </div>
          <label for="img1">
            Profile Picture
          </label>
          <input
            type="file"
            placeholder="Image Upload"
            required
            accept='image/*'
            className='input'
            name='img_url'
            onChange={updateImage} />
      <div>
        <label htmlFor='password'>Password:</label>
        <input
          name='password'
          type='password'
          placeholder='Password'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
        <label>Repeat Password</label>
        <input
          type='password'
          placeholder='repeat password'
          name='repeat_password'
          onChange={(e) => setRepeatPassword(e.target.value)}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
        <button className='button purple' type='submit'>Sign Up</button>
        <button className='button purple' type="button" onClick={handleDemo}>Demo User</button>
      </div>
    </form>
  );
};

export default LoginForm;

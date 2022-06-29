import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp, login } from '../../store/session';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignup = async (e) => {
    e.preventDefault();
    const data = await dispatch(signUp(username, email, password));
    if (data) {
      setErrors(data);
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

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignup}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
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
        <label htmlFor='password'>Password:</label>
        <input
          name='password'
          type='password'
          placeholder='Password'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='button purple' type='submit'>Sign Up</button>
        <button className='button purple' type="button" onClick={handleDemo}>Demo User</button>
      </div>
    </form>
  );
};

export default LoginForm;

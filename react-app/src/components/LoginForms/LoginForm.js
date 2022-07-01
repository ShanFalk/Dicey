import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import { getPurchases} from '../../store/purchases'
import { recommendBrews } from '../../store/recommend';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await dispatch(login(email, password));
    if (!user) {
      setErrors();
    }
    await dispatch(getPurchases(user.id))
    await dispatch(recommendBrews(user.id))

  };

  const handleDemo = async (e) => {
    e.preventDefault();
    
    const data = await dispatch(login("demo@aa.io", "password"));
    if (data) {
      setErrors(data);
    }
    await dispatch(getPurchases(1))
    await dispatch(recommendBrews(1))
   
  }

  if (user) {
   
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onLogin}>
      <h1>Login</h1>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
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
        <button className='button purple' type='submit'>Login</button>
        <button className='button purple' type="button" onClick={handleDemo}>Demo User</button>
      </div>
    </form>
  );
};

export default LoginForm;

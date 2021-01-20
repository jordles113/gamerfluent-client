import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { login } from '../services/user'

const Login = () => {
  const [targets, setTargets] = useState({ username: '', password: ''})

  const onChange = event => {
    setTargets({...targets, [`${event.target.name}`]: event.target.value})
  }

  const onSubmit = event => {
    event.preventDefault()
    console.log('when logged in', targets)
    
    login(targets)
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    setTargets({ username: '', password: '' })
  }

  return (
    <div>
      <NavLink className='button' to='/'>Landing Page</NavLink>
      <form onSubmit={ onSubmit }>
        <input type='text' placeholder='username' onChange={onChange} name='username' value={ targets.username }/>
        <input type='password' placeholder='password' onChange={onChange} name='password' value={ targets.password } />
        <button className='button' type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login

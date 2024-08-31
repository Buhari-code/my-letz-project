import React from 'react'
import "./login.css"
import { Link } from "react-router-dom";
import useForm from '../Hooks/useForm';
import validate from '../utils/validate';
import video from "../../Images/video-4.mp4"

function Login() {

  const {handleSubmit,values, handleChange, errors } = useForm(validate);
  return (
    <div className="login-container">
      <div className="videoDiv">
        <video src={video} muted autoPlay loop type="video/mp4"></video>
      </div>
    <div className="login section container1">
        <form action="form" className='login-main' onSubmit={handleSubmit}>
            <div className="login-inputs">
                <label htmlFor="email" className='login-label'>Email</label><br />
                <input 
                type="email"
                name='email'
                className='login-input'
                id='email'
                value={values.email}
                placeholder='Enter your Email'
                onChange={handleChange} />
                {errors.email && <p className='error'>{errors.email}</p>}
            </div>
            <div className="login-inputs">
                <label htmlFor="password" className='login-label'>Password</label><br />
                <input 
                type="password"
                name='password'
                className='login-input'
                id='password'
                value={values.password}
                placeholder='Enter your Password'
                onChange={handleChange} />
                {errors.password && <p className='error'>{errors.password}</p>}
            </div>
            <button className='btn'>LOG IN</button><br />
            <span className='form-input-login'>
          <h3>Already have an account? <Link to="/signin" className='login-color'>signin</Link></h3>
        </span>
        </form>
    </div>
    </div>
  )
}

export default Login
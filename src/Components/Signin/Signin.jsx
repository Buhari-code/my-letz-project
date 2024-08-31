import React, {useRef, useEffect} from 'react'
import "./signin.css"
import { Link } from "react-router-dom";
import useForm from '../Hooks/useForm';
import { FaArrowRight } from "react-icons/fa"
import validate from '../utils/validate';
import img from "../../Images/landing-2.png"

function Signin() {

  const {handleChange, values, handleSubmit, errors} = useForm(validate);

    // Create refs for form fields
  const usernameRef = useRef(null);
  const phnumberRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const password2Ref = useRef(null);

  useEffect(() => {
    // Focus on the username field when the component mounts
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  return (
    
    <div className="form content container2 ">
      <div className="secHeading">
          <h1>Get Started with us! Create Your Account</h1></div>
          <div className="content flex">
            <div className="image-content">
            <div className="imageDiv">
              <img src={img} alt="" />
            </div>
            <h4>Letz Explore the world <FaArrowRight className='icon'/></h4>
            </div>
      <form action="form" onSubmit={handleSubmit}>
          <div className="form-inputs">
            <label htmlFor="username" className='form-label'>
              User Name
            </label>
            <input 
            id="username" 
            type="text" 
            name='username' 
            className='form-input' 
            placeholder='Enter Your Name' 
            value={values.username} 
            onChange={handleChange}
            ref={usernameRef}/>
            {errors.username && <p className='error'>{errors.username}</p>}
          </div>
           <div className="form-inputs">
            <label htmlFor='phnumber' className='form-label'>
              Phone Number
            </label>
            <input id='phnumber' 
            type="number" 
            name='phnumber' 
            className='form-input' 
            placeholder='Enter your Phone Number'
            value={values.phnumber} 
            onChange={handleChange}
            ref={phnumberRef}/>
            {errors.phnumber && <p className='error'>{errors.phnumber}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor='email' className='form-label'>
              Email
            </label><br />
            <input id='email' 
            type="email" 
            name='email' 
            className='form-input' 
            placeholder='Enter Your Email' 
            value={values.email} 
            onChange={handleChange}
            ref={emailRef}/>
            {errors.email && <p className='error'>{errors.email}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor='password' className='form-label'>
              Password
            </label>
            <input id='password' 
            type="password" 
            name='password' 
            className='form-input' 
            placeholder='Create Your Password'
            value={values.password} 
            onChange={handleChange}
            ref={passwordRef} />
            {errors.password && <p className='error'>{errors.password}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor='password2' className='form-label'>
              Confirm Password
            </label>
            <input id='password2' 
            type="password" 
            name='password2' 
            className='form-input' 
            placeholder='Confirm Password' 
            value={values.password2} 
            onChange={handleChange}
            ref={password2Ref}/>
            {errors.password2 && <p className='error'>{errors.password2}</p>}
          </div>
        <button className='btn'>SIGN IN</button><br />
        <span className='form-input-login'>
          <h3>Already have an account? <Link to="/login" className='login-color'>login</Link></h3>
        </span>
      </form>
    </div>
    </div>
  )
}

export default Signin
import React, { useState } from 'react'
import validate from '../utils/validate';

function useForm() {
  
    const [values, setValues] = useState({
        username:'',
        email:'',
        phnumber:'',
        password:'',
        password2:'',

    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;

        setValues((currValues)=>{
            return{
                ...currValues,
                [name]: value,
                
                
            }
        })
    }

    const handleSubmit = (event) =>{
        event.preventDefault();

        setErrors(validate(values))
    }

    return {
        handleChange,values, handleSubmit, errors
    }
}

export default useForm

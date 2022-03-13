import React from 'react'
import "./ContactForm.css"
import { useState } from 'react'

export default function ContactForm() {
  const initialValues = {username: "", email:"", message: ""} 
  const [formValues, setFormValues] = useState(initialValues) 
  const [formErrors, setFormErrors] = useState({}) 

  const handleChange = (e) => {
    const { name, value } = e.target; 
    setFormValues({ ...formValues, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues))
  }

  const validate = (values) => {
    const errors = {}
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

    if (!values.username) {
      errors.username = "Name is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not valid email format!";
    }


    if (!values.message) {
      errors.message = "Message is required!";
    } else if (values.message.length < 10) {
      errors.message = "Message must be more than 10 characters";
    }
    return errors;
  }

  return (
    <div className='formular'>
        <h2 className='colorBlack'>Contact me</h2>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="username" placeholder="Enter you name" value={formValues.username}/>
            <p className='error'>{formErrors.username}</p>
            <input onChange={handleChange} type="text" name="email" placeholder="Enter valid email address" value={formValues.email}/>
            <p className='error'>{formErrors.email}</p>
            <textarea onChange={handleChange} id="message" name="message" placeholder="Enter your message" value={formValues.message}/>
            <p className='error'>{formErrors.message}</p>
            <button>SUBMIT</button>
        </form>
    </div>
  )
}

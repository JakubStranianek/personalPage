import React from 'react'
import "./ContactForm.css"
import { useState } from 'react'
import emailjs from '@emailjs/browser'


export default function ContactForm() {
  const initialValues = {username: "", email:"", message: ""} 
  const [formValues, setFormValues] = useState(initialValues) 
  const [formErrors, setFormErrors] = useState({}) 

  const handleChange = (e) => {
    const { name, value } = e.target; 
    setFormValues({ ...formValues, [name]: value});
    console.log(formValues)
    setFormErrors(validate(formValues))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (Object.keys(formErrors).length === 0){
      emailjs.sendForm("service_nggsi0i", 
      "template_d58q6fk", 
      e.target,
      "94OAppgmhrosU3Yu2").then(res=> {
        console.log(res);
      }).catch(err => console.log(err));

      setFormValues(initialValues)
    } else {
      console.log("su tam errory")
    }
  }

  const validate = (values) => {
    const errors = {}
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

    if (values.username.charAt(0) !== values.username.charAt(0).toUpperCase()) {
      errors.username = "First letter of username must be big sign!";  
    }

    if (!regex.test(values.email)) {
      errors.email = "This is not valid email format!";
    } 
      
    if (values.message.length < 10) {
      errors.message = "Message must be more than 10 characters!";  
    }

    return errors;
  }

  return (
    <div className='formular'>
        <h2 className='colorBlack'>Contact me</h2>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="username" placeholder="Enter you name" value={formValues.username} required/>
            <p className='error'>{formErrors.username}</p>
            <input onChange={handleChange} type="text" name="email" placeholder="Enter valid email address" value={formValues.email} required/>
            <p className='error'>{formErrors.email}</p>
            <textarea onChange={handleChange} id="message" name="message" placeholder="Enter your message" value={formValues.message} required/>
            <p className='error'>{formErrors.message}</p>
            <button>SUBMIT</button>
        </form>
    </div>
  )
}

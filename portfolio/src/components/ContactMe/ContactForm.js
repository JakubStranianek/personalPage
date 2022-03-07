import React from 'react'
import "./ContactForm.css"

export default function ContactForm() {
  return (
    <div className='formular'>
        <h2 className='colorBlack'>Contact me</h2>
        <form>
            <input type={Text} placeholder="Enter you name"/>
            <input type={Text} placeholder="Enter valid email address"/>
            <textarea id="message" placeholder="Enter your message"/>
        </form>

        <button>SUBMIT</button>
    </div>
  )
}

import React from 'react'
import ContactForm from './ContactForm'
import "./ContactMe.css"
import ContactPhone from './ContactPhone'

export default function ContactMe() {
  return (
    <div className='contactMe'>
        <ContactForm />
        <ContactPhone />
    </div>
  )
}

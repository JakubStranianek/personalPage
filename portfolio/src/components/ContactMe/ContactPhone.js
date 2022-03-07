import React from 'react'
import "./ContactPhone.css"
import memoji2 from "../../assets/memoji2.png"
import fb from "../../assets/fb.png"
import insta from "../../assets/insta.png"
import github from "../../assets/gitHub.png"

export default function ContactPhone() {
  return (
    <div className='contactPhone'>
        <img src={memoji2}></img>
        <a href='https://www.facebook.com/jakub.stranianek/' target="_blank"><img src={fb}></img></a>
        <a href='https://www.instagram.com/jakub_stranianek/' target="_blank"><img src={insta}></img></a>
        <a href='https://github.com/JakubStranianek?tab=repositories' target="_blank"><img src={github}></img></a>
    </div>
  )
}

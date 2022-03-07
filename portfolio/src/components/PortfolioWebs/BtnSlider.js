import React from 'react'
import "./BtnSlider.css"
import rightArrow from "../../assets/rightArrow.svg"
import leftArrow from "../../assets/leftArrow.svg"

export default function BtnSlider({moveSlide, direction}) {
    return (
    <button 
    onClick={moveSlide}
    className={direction === "next" ? "btn-slider next" : "btn-slider prev"}>
        <img src={direction === "next" ? rightArrow : leftArrow}></img>
    </button>
  )
}

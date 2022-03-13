import {React, useState} from 'react'
import "./PortfolioWebSlider.css"
import BtnSlider from "./BtnSlider.js"

const sliderData = [
    {
        id: "1",
        title: "TipCalculator",
    },
    {
        id: "2",
        title: "SuiteLandingPage",
    },
    {
        id: "3",
        title: "BookmarkLandingPage",
    },
    {
        id: "4",
        title: "ClockApp",
    },
    {
        id: "5",
        title: "TicTacToe Game",
    }
]

export default function PortfolioWebSlider() {
  const [slideIndex, setSlideIndex] = useState(1)
  
  const nextSlide = () => {
    if(slideIndex !== sliderData.length) {
        setSlideIndex(slideIndex+1)
    } else if (slideIndex === sliderData.length) {
        setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if(slideIndex === 1) {
        setSlideIndex(sliderData.length)
    } else if (slideIndex !== 1) {
        setSlideIndex(slideIndex - 1)
    }
  }

  const moveDot = index => {
      setSlideIndex(index)
  }
  
    return (
    <div className="slider-container">
        {sliderData.map((object, index) => {
            return (
                <div className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                    <img src={process.env.PUBLIC_URL + `/sliderPages/page${index+1}.png`} alt={`page${index+1}`} />
                </div>
            )
        }
        )} 

        <div className='btn-wrapper'>
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />
        </div>

        <div className='dots-container'>
            {Array.from({length: 5}).map((item, index) => {
                return (
                    <div onClick={() => moveDot(index+1)} className={slideIndex === index + 1 ? "dot active" : "dot"}></div>
                )
            })}
        </div>
    </div>
  )
}

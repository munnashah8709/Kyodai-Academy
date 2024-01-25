import React from 'react'
import "../component/imagesliders.css";
import firstimage from "../images/image1.jpg"
import secondimage from "../images/image2.jpg"
import thirdimage from "../images/image3.jpg"
import Fourthimage from "../images/image4.jpg"


function Sliderimage() {
  return (
       <>
      <div className="slider-frame" style={{marginTop:"1px"}}>
        <div className="slide-images">
          <div className="img-container">
            <img src={firstimage}/>
          </div>
          <div className="img-container">
            <img src={secondimage}/>
          </div>
          <div className="img-container">
            <img src={thirdimage}/>
          </div>
          <div className="img-container">
            <img src={Fourthimage} />
          </div>

        </div>
      </div>

      <br/>
    </>

  )
}

export default Sliderimage

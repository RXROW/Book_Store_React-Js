import React, { useState } from 'react';
import './slider.css';
import fristImage from "../../images/book1.png"
import secondImage from "../../images/book2.png"
import thirdImage from "../../images/book3.png"
const Slider = () => {
  const [slideIndex , setSlideIndex] = useState(0);
 const handleClick = (driction)=>{
  if(driction === "left"){
    setSlideIndex( slideIndex > 0 ? slideIndex - 1 : 2);
  }else{
    setSlideIndex( slideIndex < 2 ?  slideIndex + 1 : 0);

  }

 }

  return (
    <div className='slider-container'>
 
              <i onClick={()=>handleClick("left")} className="bi bi-chevron-double-left arrow-left"></i>
  
    <div style={{transform:`translateX(${ slideIndex * -100}vw)`}} className='slider-wrapper'>


      <div className="slide frist-slide">
        <div className="flex">
        <div className="slide-image-wrapper">
          <img src={fristImage} alt=""/>
        </div>
        <div className="slide-info-wrapper">
          <h2 className="slide-info-title"> Book Store </h2>
          <p className="slide-info-desc"> It's not just reading . it's living the adventure  </p>

        </div>
      </div>
      </div>

            
      <div className="slide second-slide">
        <div className="slide-image-wrapper">
          <img src={secondImage} alt=""/>
        </div>
        <div className="slide-info-wrapper">
          <h2 className="slide-info-title"> Book Store </h2>
          <p className="slide-info-desc"> It's not just reading . it's living the adventure  </p>

        </div>
      </div>
     
       
      <div className="slide third-slide">
        <div className="slide-image-wrapper">
          <img src={thirdImage} alt=""/>
        </div>
        <div className="slide-info-wrapper">
          <h2 className="slide-info-title"> Book Store </h2>
          <p className="slide-info-desc"> It's not just reading . it's living the adventure  </p>

        </div>
      </div>
     
 
     
 
    </div>
   
    <i onClick={()=>handleClick("right")} className="bi bi-chevron-double-right arrow-right"></i>

   
    </div>
  );
}

export default Slider;

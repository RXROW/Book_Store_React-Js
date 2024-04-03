import React, { useState } from 'react';
import './book-slider.css';
import Rating from './Rating';

const BookSlider = ({ data }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const lengthOfData = data.length;

  const handleClick = (dir) => {
    if (dir === "left") {
      setSlideIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : lengthOfData - 1));
    } else {
      setSlideIndex((prevIndex) => (prevIndex < lengthOfData - 1 ? prevIndex + 1 : 0));
    }
  };

  return (
    <div className='book-slide-container'>
      {slideIndex > 0 && (
        <i onClick={() => handleClick("left")} className="bi bi-chevron-left book-slide-left-arrow"></i>
      )}
      <div style={{ transform: `translateX(${slideIndex * -220}px)` }} className="book-slider-wrapper">
        {data.map((item) => (
          <div key={item.id} className='book-slide-item'>
            <img src={`/books/${item.image}`} alt={item.title} className='book-slide-item-img' />
            <h1 className='book-slide-item-title'>{item.title}</h1>
 
           <Rating rating={item.rating} reviews={item.reviews}/>
           
            <p className="book-slide-item-price">${item.price}</p>
            <div className="book-slide-icon-wrapper">
              <i className="bi bi-eye-fill"></i>
              <i className="bi bi-cart-plus"></i>
            </div>
          </div>
        ))}
      </div>
      {slideIndex < lengthOfData - 1 && (
        <i onClick={() => handleClick("right")} className="bi bi-chevron-right book-slide-right-arrow"></i>
      )}
    </div>
  );
};

export default BookSlider;

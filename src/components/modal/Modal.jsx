import React from 'react';
import './modal.css'
import Rating from '../book-slider/Rating';
import { Link } from 'react-router-dom';

const Modal = ({bookData ,setOpenMoadal}) => {
  const {image ,title ,inStock ,rating,reviews ,author,price ,id} = bookData;
  return (
    <div onClick={()=>setOpenMoadal(false)} className='modal-container'>
      <div onClick={(ev)=>ev.stopPropagation()} className="modal-content">
        <i onClick={()=>setOpenMoadal(false)} className="bi bi-x-circle-fill modal-icon"></i>
        <div className="modal-content-image">
          <img src={`/books/${image}`} alt={title} />
        </div>
        <div className="modal-content-info">
          <h3 className="modal-content-title">{title}</h3>
          <div className="modal-content-stock">
            <b>Status: </b> {inStock ? "in Stock" :"not in Stock"}
          </div>
          <Rating rating={rating} reviews={reviews}/>
          <div className="modal-content-author">
            <b>Author: </b> {author}
          </div>
          <div className="modal-content-price">
            <b>Price: </b> ${price}
          </div>
          <div className="modal-add-cart">
            <input  type="number" min="1" max="100" className='modal-add-cart-input'/>
            <button className='modal-add-cart-btn'>
            <i className="bi bi-cart-plus"></i>
              Add To Cart</button>
          </div>
          <Link to={`/book/${id}`} className="modal-link">
          See More Details
          </Link>
        </div>

        
      </div>
      
    </div>
  );
}

export default Modal;

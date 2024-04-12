import React from "react";
import { useParams } from "react-router-dom";
import { books } from "../../data/books";
import Rating from "../../components/book-slider/Rating";
import './book.css'
const Book = () => {
  const { id } = useParams();
  const book = books.find((b) => b.id === +id);
  console.log(book);
  return (
    <div className="book">
      <div className="book-content">
        <img
          src={`/books/${book.image}`}
          alt={book.title}
          className="book-content-img"
        />
        <div className="book-content-info">
          <h1 className="book-title">{book.title}</h1>
          <div className="book-author">
            by <span>{book.author} </span> (Author)
          </div>
          <Rating rating={book.rating} reviews={book.reviews} />
          <div className="book-add-to-cart">
            <input
              type="number"
              min={1}
              max={100}
              className="book-add-to-cart-input"
            />
            <button className="book-add-to-cart-btn">
              <i className="bi bi-cart-plus"></i>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <p className="book-disc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        accusamus illum laudantium eos porro harum. Dolorum dignissimos eligendi
        non molestias, tenetur modi, nisi consectetur rerum atque dolor nesciunt
        magni facere. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        At ad laboriosam, facere veniam officiis sunt ut accusamus
        necessitatibus laborum nihil voluptatibus repellendus aliquid ipsum
        quisquam. Ipsam maxime odio officiis nisi!
      </p>
      <div className="book-icons">
        <div className="book-icon">
          <small>Print Length</small>
          <i className="bi bi-file-earmark-break"></i>
          <p>{book.printLength}</p>
        </div>
        <div className="book-icon">
          <small>Language</small>
          <i className="bi bi-globe"></i>
          <p>{book.language}</p>
        </div>
        <div className="book-icon">
          <small>Publication Date</small>
          <i className="bi bi-calendar3"></i>
          <p>{book.PublicationDate}</p>
        </div>
      </div>
    </div>
  );
};

export default Book;

import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId,bookName, author, image, tags, category } = book;
  return (
        <Link to={`/books/${bookId}`}>
            <div>
      <div className="card bg-base-100 w-96 shadow-xl p-5">
        <figure>
          <img className="h-[145px]" src={image} alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex justify-between my-2">
            {tags.map((tag,index) => (
              <button key={index} className="btn btn-xs">{tag}</button>
            ))}
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p>{author}</p>
          <div className="border-t-2 my-2 border-dashed"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className="rating">
              <input type="radio" name="rating-1" className="mask mask-star" />
            </div>
          </div>
        </div>
      </div>
    </div>
        </Link>
  );
};

export default Book;

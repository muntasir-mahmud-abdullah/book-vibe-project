import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId)
  const data = useLoaderData();
  console.log(data);
  const book = data.find(book => book.bookId === id);
  const {bookId:Id,image} = book;
  return (
    <div>
      <h2>Book Details : {Id}</h2>
      <img className="h-[140px]" src={image} alt="" />
   
       
    
    </div>
  );
};

export default BookDetails;

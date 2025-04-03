// write the book component code here
import React from "react";

const BookCard = ({ title, author, description, image }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 w-64 bg-white">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
      <p className="text-sm text-gray-700">by {author}</p>
      <p className="text-xs text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default BookCard;
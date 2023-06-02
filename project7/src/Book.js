import React from "react";

const Book = ({ title, author, id, onRemove }) => {
  return (
    <div className="book">
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <button onClick={() => onRemove(id)}>Remove</button>
    </div>
  );
};

export default Book;

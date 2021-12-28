import React from "react";

const BookshelfBook = ({ bookId }) => {
  return (
    <li className="book">
      <img
        src={`https://www.gutenberg.org/cache/epub/${bookId}/pg${bookId}.cover.medium.jpg`}
      />
    </li>
  );
};

export default BookshelfBook;

import React from 'react';

const BookDetails = () => {
  const books = [
    { id: 1, bname: 'Master React', price: 670 },
    { id: 2, bname: 'Deep Dive into Angular 11', price: 800 },
    { id: 3, bname: 'Mongo Essentials', price: 450 }
  ];

  return (
    <div className="column">
      <h2>Book Details</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {books.length > 0 ? (
          books.map(book => (
            <li key={book.id}>
              <h3>{book.bname}</h3>
              <h4>{book.price}</h4>
            </li>
          ))
        ) : (
          <p>No books available</p>
        )}
      </ul>
    </div>
  );
};

export default BookDetails;

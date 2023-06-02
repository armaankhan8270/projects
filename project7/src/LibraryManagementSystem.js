import React, { useState } from "react";
import Book from "./Book";
import Member from "./Member";
import Record from "./Record";

const LibraryManagementSystem = () => {
  const [books, setBooks] = useState([]);
  const [members, setMembers] = useState([]);
  const [records, setRecords] = useState([]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author }]);
  };

  const addMember = (name, email) => {
    setMembers([...members, { name, email }]);
  };

  const borrowBook = (bookTitle, memberName) => {
    const borrowedDate = new Date().toLocaleDateString();
    setRecords([...records, { bookTitle, memberName, borrowedDate }]);
  };

  const returnBook = (bookTitle, memberName) => {
    const returnedDate = new Date().toLocaleDateString();
    const updatedRecords = records.map((record) => {
      if (record.bookTitle === bookTitle && record.memberName === memberName) {
        return { ...record, returnedDate };
      } else {
        return record;
      }
    });
    setRecords(updatedRecords);
  };

  return (
    <div>
      <h1>Library Management System</h1>

      <h2>Add Book</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addBook(e.target.title.value, e.target.author.value);
          e.target.reset();
        }}
      >
        <label>Title:</label>
        <input type="text" name="title" />
        <br />
        <label>Author:</label>
        <input type="text" name="author" />
        <br />
        <button type="submit">Add Book</button>
      </form>

      <h2>Books</h2>
      {books.map((book, index) => (
        <Book key={index} title={book.title} author={book.author} />
      ))}

      <h2>Add Member</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addMember(e.target.name.value, e.target.email.value);
          e.target.reset();
        }}
      >
        <label>Name:</label>
        <input type="text" name="name" />
        <br />
        <label>Email:</label>
        <input type="email" name="email" />
      </form>
    </div>
  );
};
export default LibraryManagementSystem;

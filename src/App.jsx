import React, { useState, useEffect } from 'react';
import './componets/App.css'; 
import BookForm from './componets/BookForm';
import BookList from './componets/BookList';


function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books'));
    if (storedBooks) {
      setBooks(storedBooks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]);
  };

  const updateBook = (updatedBook) => {
    setBooks(books.map(book => book.id === updatedBook.id ? updatedBook : book));
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div className="App">
      <h1>Books</h1>
      <BookForm addBook={addBook} />
      <BookList books={books} updateBook={updateBook} deleteBook={deleteBook} />
    </div>
  );
}

export default App;

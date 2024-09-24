import React, { useState } from 'react';

function BookList({ books, updateBook, deleteBook }) {
    const [isEditing, setIsEditing] = useState(null);
    const [editedBook, setEditedBook] = useState({});

    const handleEdit = (book) => {
        setIsEditing(book.id);
        setEditedBook(book);
    };

    const handleSave = () => {
        updateBook(editedBook);
        setIsEditing(null);
    };

    return (
        <div className='container'>
            {books.length === 0 ? (
                <p>No books available</p>
            ) : (
                books.map(book => (
                    <div key={book.id} className="book-item"> {}
                        {isEditing === book.id ? (
                            <div className="edit-form"> {}
                                <input
                                    type="text"
                                    value={editedBook.title}
                                    onChange={(e) => setEditedBook({ ...editedBook, title: e.target.value })}
                                    required
                                />
                                <input
                                    type="text"
                                    value={editedBook.author}
                                    onChange={(e) => setEditedBook({ ...editedBook, author: e.target.value })}
                                    required
                                />
                                <input
                                    type="number"
                                    value={editedBook.year}
                                    onChange={(e) => setEditedBook({ ...editedBook, year: e.target.value })}
                                    required
                                />
                                <textarea
                                    value={editedBook.description}
                                    onChange={(e) => setEditedBook({ ...editedBook, description: e.target.value })}
                                    required
                                />
                                <button onClick={handleSave}>Save</button>
                            </div>
                        ) : (
                            <div>
                                <h3>{book.title}</h3>
                                <p>Author: {book.author}</p>
                                <p>Year: {book.year}</p>
                                <p>Description: {book.description}</p>
                                <button onClick={() => handleEdit(book)}>Edit</button>
                                <button onClick={() => deleteBook(book.id)}>Delete</button>
                            </div>
                        )}
                    </div>
                ))
            )}
        </div>
    );
}

export default BookList;


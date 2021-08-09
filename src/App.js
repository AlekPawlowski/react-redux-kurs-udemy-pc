import React, { useState, useEffect } from 'react';
import './App.css';
import Add from './components/Add';
import Inventory from './components/Inventory';

const App = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://clockworkjava.pl/books.php")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setBooks(data);
                console.log("data", data);
            });
        // setBooks(mockData);
    }, []);

    return (
        <div className="App">
            <Add books={books} setBooks={setBooks} />
            <Inventory books={books} />
        </div>
    );
}

export default App;

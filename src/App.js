import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';
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
            <h1>react bookstore</h1>
            <Router>
                <Add path="/admin" books={books} setBooks={setBooks} />
                <Inventory books={books} path="/" />
            </Router>
        </div>
    );
}

export default App;

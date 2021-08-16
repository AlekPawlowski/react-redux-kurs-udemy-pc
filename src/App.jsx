import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Router, Link } from "@reach/router";
import "./App.css";
import Add from "./components/Add";
import Inventory from "./components/Inventory";
import { ADD_BOOK } from "./store/reducer.js";

export const App = () => {
    const [books, setBooks] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        fetch("https://clockworkjava.pl/books.php")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                data.forEach((book) =>
                    dispatch({ type: ADD_BOOK, payload: book })
                );
            });
        // setBooks(mockData);
    }, []);

    return (
        <div className="App">
            <Link to="/">
                <h1>react bookstore</h1>
            </Link>
            <Link to="/admin">
                <h1>admin</h1>
            </Link>
            <Router>
                <Add path="/admin" books={books} setBooks={setBooks} />
                <Inventory books={books} path="/" />
            </Router>
        </div>
    );
};

export default App;

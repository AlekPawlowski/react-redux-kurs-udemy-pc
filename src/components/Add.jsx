import React, { useState, useEffect } from "react";
import useDropdown from "./useDropdown";
import * as mockData from "../mock/books.json";

const Add = () => {
    const [author, setAuthor] = useState("");
    // const [genre, setGenre] = useState("");
    // const [audience, setAudience] = useState("");
    const genres = ["kryminal", "fantastyka", "horror"];
    const audiences = ["Dzieci", "Młodzież", "Dorośli"];
    const [genre, GenreDropdown] = useDropdown("", "Gatunek", genres);
    const [audience, AudienceDropdown] = useDropdown("", "Dla", audiences);
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
        <div>
            <form>
                <label htmlFor="author">
                    Autor
                    <input
                        id="author"
                        value={author}
                        placeholder="wpisz autora"
                        onChange={(event) => setAuthor(event.target.value)}
                    />
                </label>
                <br />
                <GenreDropdown />
                <br></br>
                <AudienceDropdown />
                <br />
                <button>Dodaj</button>
            </form>
        </div>
    );
};

export default Add;

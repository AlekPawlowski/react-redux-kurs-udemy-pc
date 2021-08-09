import React, { useState } from "react";
import useDropdown from "./useDropdown";

const Add = ({ books, setBooks }) => {
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [publicationDate, setPublicationDate] = useState("");
    const genres = ["kryminal", "fantastyka", "horror"];
    const audiences = ["Dzieci", "Młodzież", "Dorośli"];
    const [genre, GenreDropdown] = useDropdown("", "Gatunek", genres);
    const [audience, AudienceDropdown] = useDropdown("", "Dla", audiences);

    const addBook = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const newBook = {
            author: author,
            title: title,
            publicationDate: publicationDate,
            genre: genre,
            audience: audience,
        };
        const newBooks = [...books, newBook];

        setBooks(newBooks);
    };

    return (
        <div>
            <form>
                <label htmlFor="title">
                    Tytuł
                    <input
                        id="title"
                        value={title}
                        placeholder="wpisz tytuł"
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </label>
                <br />
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
                <label htmlFor="publicationDate">
                    data publikacji
                    <input
                        id="publicationDate"
                        value={publicationDate}
                        placeholder="wpisz date"
                        onChange={(event) =>
                            setPublicationDate(event.target.value)
                        }
                    />
                </label>
                <br />
                <GenreDropdown />
                <br></br>
                <AudienceDropdown />
                <br />
                <button onClick={(event) => addBook(event)}>Dodaj</button>
            </form>
        </div>
    );
};

export default Add;

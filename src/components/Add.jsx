import React, { useState } from "react";
import useDropdown from "./useDropdown";
import InputComponent from "./InputComponent";
import { useDispatch } from "react-redux";
import { ADD_BOOK } from "../store/reducer";
import { fbase } from "../firebase";

export const Add = () => {
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [publicationDate, setPublicationDate] = useState("");
    const genres = ["kryminal", "fantastyka", "horror"];
    const audiences = ["Dzieci", "Młodzież", "Dorośli"];
    const [genre, GenreDropdown] = useDropdown("", "Gatunek", genres);
    const [audience, AudienceDropdown] = useDropdown("", "Dla", audiences);
    const dispatch = useDispatch();
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
        console.log(newBook);
        // fbase.syncState('books/', {

        // });
        dispatch({ type: ADD_BOOK, payload: newBook });
    };

    return (
        <div>
            <form>
                <InputComponent
                    label="Tytuł"
                    state={title}
                    setState={setTitle}
                />
                <br />
                <InputComponent
                    label="Autor"
                    state={author}
                    setState={setAuthor}
                />
                <br />
                <InputComponent
                    label="Publikacja"
                    state={publicationDate}
                    setState={setPublicationDate}
                    type="number"
                />
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

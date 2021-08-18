import firebase from "firebase";
import Rebase from "re-base";

const firebaseApp = firebase.initializeApp({
    apiKey: "...",
    authDomain: "...",
    databaseURL: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "..."
});
const fbase = Rebase.createClass(firebaseApp.database());

export { fbase, firebaseApp };

Hi, i got this bunch of code which i want to send data to realtimeDatabase in firebase but i got an error:

@firebase/database: FIREBASE WARNING: Exception was thrown by user callback. TypeError: Cannot read property 'call' of undefined

component:
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
        dispatch({ type: ADD_BOOK, payload: newBook });
        fbase.syncState("bookstore/book", {
            context: newBook,
            state: "newBook",
        });
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

and firebase config:
import firebase from "firebase";
import Rebase from "re-base";

const firebaseApp = firebase.initializeApp({
    apiKey: "...",
    authDomain: "...",
    databaseURL: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "..."
});
const fbase = Rebase.createClass(firebaseApp.database());

export { fbase, firebaseApp };

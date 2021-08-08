import React, { useState, useEffect } from "react";
import useDropdown from "./useDropdown";

const Add = () => {
    const [author, setAuthor] = useState("");
    // const [genre, setGenre] = useState("");
    // const [audience, setAudience] = useState("");
    const genres = ["kryminal", "fantastyka", "horror"];
    const audiences = ["dzieci", "mlodziez", "dorosli"];
    const [genre, GenreDropdown] = useDropdown("", "Gatunek", genres);
    const [audience, AudienceDropdown] = useDropdown("", "Dla", audiences);

    useEffect(() => {
        console.log("useEffect");
    }, [genre]);

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

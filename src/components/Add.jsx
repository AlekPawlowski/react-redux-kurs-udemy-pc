import React, { useState } from "react";

const Add = () => {
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [audience, setAudience] = useState("");
    const genres = ["kryminal", "fantastyka", "horror"];
    const audiences = ["dzieci", "mlodziez", "dorosli"];
    return (
        <div>
            <form>
                <label htmlFor="author">
                    Autor
                    <input
                        id="author"
                        value={author}
                        placeholder="wpisz autora"
                        onchange={(event) => setAuthor(event.target.value)}
                    />
                </label>
                <br />
                <label htmlFor="genres">
                    Gatunek
                    <select
                        name=""
                        value={genre}
                        onchange={(event) => setGenre(event.target.value)}
                        onBlur={(event) => setGenre(event.target.value)}
                    >
                        <option value="">Dowolna</option>
                        {genres.map((genres) => {
                            return (
                                <option key={genres} value={genre}>
                                    {genres}
                                </option>
                            );
                        })}
                    </select>
                </label>
                <br></br>
                <label htmlFor="audence">
                    Dla
                    <select
                        name=""
                        value={audience}
                        onchange={(event) => setGenre(event.target.value)}
                        onBlur={(event) => setGenre(event.target.value)}
                    >
                        <option value="">Dowolna</option>
                        {audiences.map((audience) => {
                            return (
                                <option key={audience} value={audience}>
                                    {audience}
                                </option>
                            );
                        })}
                    </select>
                </label>
                <br />
                <button>Dodaj</button>
            </form>
        </div>
    );
};

export default Add;

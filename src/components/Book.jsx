import React from "react";

const Book = ({ title, author, publicationDate, genre, audience }) => {
    return (
        <div>
            <h2>{title}</h2>
            <h2>{author}</h2>
            <h2>{publicationDate}</h2>
            <h3>{genre}</h3>
            <h3>{audience}</h3>
        </div>
    );
};

export default Book;

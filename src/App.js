import { useState } from 'react';
import './App.css';
import Book from './components/Book';

const App = () => {

    return (
        <div className="App">
            <Book
                title="Straż"
                author="John Smith"
                publicationDate='2012'
                genre='fantastyka'
            />
            <Book
                title="WP"
                author="JRRtolkiem"
                publicationDate='1655'
                genre='fantastyka'
            />
            <Book
                title="some"
                author="GreenBook"
                publicationDate='7896'
                genre='fantastyka'
            />
        </div>
    );
}

export default App;

import React from 'react';
import './App.css';
import Book from './components/Book';
import Add from './components/Add';

const App = () => {

    return (
        <div className="App">
            <Add />
            <Book
                title="Straż"
                author="John Smith"
                publicationDate='2012'
                genre='fantastyka'
                audience="mlodziez"
            />
            <Book
                title="WP"
                author="JRRtolkiem"
                publicationDate='1655'
                genre='fantastyka'
                audience="dorosli"
            />
            <Book
                title="some"
                author="GreenBook"
                publicationDate='7896'
                genre='fantastyka'
                audience="dzieci"
            />
        </div>
    );
}

export default App;

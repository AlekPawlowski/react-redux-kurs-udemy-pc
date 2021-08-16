import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Wrapper from './Wrapper';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <script src="/__/firebase/8.9.1/firebase-app.js"></script>
        <script src="/__/firebase/init.js"></script>
        <Wrapper />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

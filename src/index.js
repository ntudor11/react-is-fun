import React, { Component } from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types'
import Library from './Library'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let bookList = [
  {"title": "The sun also rises", "author": "Ernest Hemingway", "pages": 260},
  {"title": "White Teeth", "author": "Zadie Smith", "pages": 480},
  {"title": "Harry Potter and the Deathly Hallows", "author": "J.K. Rowling", "pages": 984}
]

// ReactDOM.render(<App />, document.getElementById('root'));


render (
  <Library books={bookList} />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

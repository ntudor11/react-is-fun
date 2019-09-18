import React, { Component } from 'react'
import {render} from 'react-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let bookList = [
  {"title": "The sun also rises", "author": "Ernest Hemingway", "pages": 260},
  {"title": "White Teeth", "author": "Zadie Smith", "pages": 480},
  {"title": "Harry Potter and the Deathly Hallows", "author": "J.K. Rowling", "pages": 984}
]

const Book = ({title, author, pages, freeBookmark}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by {author}</p>
      <p>{pages} pages</p>
      <p>Free bookmark today: {freeBookmark ? 'Yes' : 'No'}</p>
    </section>
  )
}

const Hiring = () =>
  <div>
    <p>The Library is hiring! Go to <a target="_blank" href="https://library.com/jobs">library.com/jobs</a> for more.</p>
  </div>

const NotHiring = () =>
  <div>
    <p>The Library is not hiring. Check back later.</p>
  </div>

class Library extends React.Component {
  state = {
    open: true,
    freeBookmark: true,
    hiring: true
  }

  componentDidMount() {
    console.log("The component is now mounted.")
  }

  componentDidUpdate() {
    console.log("The component just updated")
  }

  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  render() {
    console.log(this.state)
    const {books} = this.props
    return (
      <div>
        {this.state.hiring ? <Hiring/> : <NotHiring/>}
        <h1>Welcome to the Library.</h1>
        <h2>The library is {this.state.open ? 'open' : 'closed'}.</h2>
        <button onClick={this.toggleOpenClosed}>Change State</button>
        {books.map(
          (book, i) =>
            <Book
              key = {i}
              title = {book.title}
              author={book.author}
              pages={book.pages}
              freeBookmark={this.state.freeBookmark}
            />
        )}
      </div>
    )
  }
}

// ReactDOM.render(<App />, document.getElementById('root'));

render (
    <Library books={bookList} />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

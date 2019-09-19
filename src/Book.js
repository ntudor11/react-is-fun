import React from 'react'

export const Book = ({title="No Title Provided", author="No Author", pages=0, freeBookmark}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by {author}</p>
      <p>{pages} pages</p>
      <p>Free bookmark today: {freeBookmark ? 'Yes' : 'No'}</p>
    </section>
  )
}

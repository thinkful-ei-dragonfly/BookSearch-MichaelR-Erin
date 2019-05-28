import React from 'react';
import Book from './Book';

function BookList(props) {
  const mappedBooks = props.books.map(item => <Book key={item.id} title={item.volumeInfo.title} authors={item.volumeInfo.authors} price={item.saleInfo.listPrice.amount} description={item.volumeInfo.description} img={item.volumeInfo.imageLinks.thumbnail} />);

  return (
    <div>
      BookList
      {mappedBooks}
    </div>
  )
}

export default BookList;
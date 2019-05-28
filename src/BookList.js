import React from 'react';
import Book from './Book';

function BookList(props) {
  const mappedBooks = props.books.map(item => {
    return <Book key={item.id} title={item.volumeInfo.title} authors={item.volumeInfo.authors ? item.volumeInfo.authors : ''} price={item.saleInfo.saleability === 'FOR_SALE' ? item.saleInfo.listPrice.amount : 'FREE'} description={item.volumeInfo.description ? item.volumeInfo.description : ''} img={item.volumeInfo.imageLinks.thumbnail ? item.volumeInfo.imageLinks.thumbnail : ''} />
  });

  return (
    <div>
      {mappedBooks}
    </div>
  )
}

export default BookList;
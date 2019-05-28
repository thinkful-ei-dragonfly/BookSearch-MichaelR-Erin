import React from 'react';

function Book(props) {
    return (
  <div>
    <h2>{props.title}</h2>
    <p>Author: {props.authors}</p>
    <p>Price: {props.price}</p>
    <p>{props.description}</p>
    <img src={props.img} alt="book thumbnail"/>
  </div>
  )
}

export default Book;
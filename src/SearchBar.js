import React from 'react';

function SearchBar(props) {
  function handleClick(e) {
    e.preventDefault();
    console.log(e.target.children[1].value);
  }

  return (
    <form onSubmit={(e) => handleClick(e)}>
      <label htmlFor="search">Search:</label>
      <input type="text" name="search" id="search" placeholder="Book title" val=""/>
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar;
import React from 'react';

function SearchBar(props) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.search.value);
    props.updateSearchTerm(e.target.search.value);
    e.target.search.value = '';
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="search">Search:</label>
      <input type="text" name="search" id="search" placeholder="Book title" val=""/>
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar;
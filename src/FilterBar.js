import React from 'react';

function FilterBar(props) {
  function handleChange(e) {
    if (e.target.id ==="print-style") {
      console.log('Change state.printStyle');
    } else {
      console.log('Change state.bookType');
    }
  }

  return (
    <div>
      <label htmlFor="print-type">Print Type:</label>
      <select name="print-type" id="print-style" onChange={(e) => handleChange(e)}>
        <option value="all">All</option>
        <option value="books">Books</option>
        <option value="magazines">Magazines</option>
      </select>
      <label htmlFor="book-type">Book Type:</label>
      <select name="book-type" id="book-style" onChange={(e) => handleChange(e)}>
        <option value="no-filter">No Filter</option>
        <option value="partial">partial</option>
        <option value="full">full</option>
        <option value="free-ebooks">Free eBooks</option>
        <option value="paid-ebooks">Paid eBooks</option>
        <option value="ebooks">eBooks</option>
      </select>
    </div>
  )
}

export default FilterBar
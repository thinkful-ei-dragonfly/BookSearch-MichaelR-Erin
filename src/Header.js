import React from 'react';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';

function Header(props) {
  return (
    <div>
      <h1>Google Book Search</h1>
      <SearchBar updateSearchTerm={props.updateSearchTerm}/>
      <FilterBar updatePrintType={props.updatePrintType} updateFilterType={props.updateFilterType}/>
    </div>
  )
}

export default Header;
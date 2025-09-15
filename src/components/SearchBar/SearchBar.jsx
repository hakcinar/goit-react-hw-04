import React from 'react';

const SearchBar = ({ onChange, onSubmit, buttonOnClick }) => {
  return (
    <header>
      <form onSubmit={onSubmit}>
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onChange}
        />
        <button onClick={buttonOnClick} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;

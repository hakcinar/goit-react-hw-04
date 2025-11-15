import React from 'react';
import './SearchBar.module.css';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ onChange, onSubmit }) => {
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
        <button type="submit">
          <FiSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;

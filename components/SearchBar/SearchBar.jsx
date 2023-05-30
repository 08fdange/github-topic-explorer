import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const SearchForm = styled.form`
  background-color: #161b22;
  border: 1px solid #30363d;
  border-radius: 6px;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  margin: 0 16px;
  position: relative;
  text-align: left;
  width: 100%;
  :hover {
    background-color: #0d1117;
  }
  :focus-within {
    border: 2px solid #1f6feb;
  }
`;

const SearchInput = styled.input`
  background: transparent;
  margin: 0;
  color: inherit;
  border: none;
  border-radius: inherit;
  padding: 8px;
  width: 100%;
  outline: none;
`;

const SearchButton = styled.button`
  text-indent: -9999px;
  overflow: hidden;
  width: 40px;
  padding: 0;
  margin: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  background: transparent url("/icons/search-icon.svg") no-repeat center;
  cursor: pointer;
  opacity: 0.7;
`;

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm('');
    onSearch(searchTerm);
  };

  return (
    <SearchForm data-testid="search-form" onSubmit={handleSubmit}>
      <SearchInput
        data-testid="search-input"
        onChange={handleChange}
        placeholder="Search for topics related to..."
        type="text"
        value={searchTerm}
      />
      <SearchButton data-testid="search-button" onClick={handleSubmit} />
    </SearchForm>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default SearchBar;





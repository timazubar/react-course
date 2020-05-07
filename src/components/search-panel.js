import React from 'react';

const SearchPanel = () => {
  const SearchText = 'What to you want to search?';
  const SearchStyle = {
    fontSize: '1.2rem',
    padding: '0.25em 0.5em 0.25em 0.5em',
  }
  return <input 
    style = {SearchStyle}
    placeholder={SearchText}/>;
};

export default SearchPanel;
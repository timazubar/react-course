import React from 'react';

import './search-panel.css';

const SearchPanel = () => {
  const SearchText = 'What to you want to search?';
  const SearchStyle = {
    fontSize: '1.2rem',
    padding: '0.25em 0.5em 0.25em 0.5em',
  }
  return (
    <div>
      <input
      className = 'form-control search-panel' 
      style = {SearchStyle}
      placeholder={SearchText}/>
    </div>
    
    );
};

export default SearchPanel;
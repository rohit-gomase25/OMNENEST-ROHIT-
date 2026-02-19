import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, isSearching }) => {
  return (
    <div style={{ marginBottom: '25px', position: 'relative' }}>
      <input 
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '95%',
          padding: '14px 20px',
          borderRadius: '12px',
          border: '1px solid #e0e0e0',
          fontSize:     '16px',
          outline: 'none',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}
      />
      {isSearching && (
        <span style={{ 
          position: 'absolute', right: '20px', top: '15px', 
          color: '#0066cc', fontSize: '14px', fontStyle: 'italic' 
        }}>
          Searching...
        </span>
      )}
    </div>
  );
};

export default SearchBar;
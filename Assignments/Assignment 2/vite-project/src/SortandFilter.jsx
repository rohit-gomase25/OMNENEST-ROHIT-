import React from 'react';

function SortAndFilter({ sortBy, setSortBy, startDate, setStartDate, endDate, setEndDate }) {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Stock Marketing</h1>

      <div style={{
        marginTop: '20px',
        padding: '15px',
        background: '#000000',
        borderRadius: '4px',
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        {/* Sort Controls */}
        <div>
          <label style={{ marginRight: '10px', fontWeight: 'bold', color: 'white' }}>Sort By:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{ padding: '8px', borderRadius: '4px' }}
          >
            <option value="default">Default</option>
            <option value="date-latest">Date: Latest First</option>
            <option value="date-oldest">Date: Oldest First</option>
            <option value="close-high-low">Close: High to Low</option>
            <option value="close-low-high">Close: Low to High</option>
            <option value="volume-high-low">Volume: High to Low</option>
            <option value="open-high-low">Open: High to Low</option>
          </select>
        </div>

        {/* Filter Controls */}
        <div>
          <label style={{ marginRight: '10px', fontWeight: 'bold', color: 'white' }}>From:</label>
          <input 
            type="date" 
            value={startDate} 
            onChange={(e) => setStartDate(e.target.value)}
            style={{ padding: '7px', borderRadius: '4px' }}
          />
        </div>

        <div>
          <label style={{ marginRight: '10px', fontWeight: 'bold', color: 'white' }}>To:</label>
          <input 
            type="date" 
            value={endDate} 
            onChange={(e) => setEndDate(e.target.value)}
            style={{ padding: '7px', borderRadius: '4px' }}
          />
        </div>
        
        <button 
          onClick={() => { setStartDate(''); setEndDate(''); }}
          style={{ padding: '8px 12px', cursor: 'pointer' }}
        >
          Clear Dates
        </button>
      </div>
    </div>
  );
}

export default SortAndFilter;

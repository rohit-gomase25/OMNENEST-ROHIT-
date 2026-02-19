import { useState } from 'react';
import SortAndFilter from './SortandFilter';
import { stockData } from './data/stockData';
import { getFilteredAndSortedStocks } from './utils/sortStocks';

function App() {
  const [sortBy, setSortBy] = useState('default');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Apply both filtering and sorting
  const displayedStocks = getFilteredAndSortedStocks(stockData, sortBy, startDate, endDate);

  return (
    <div>
      <SortAndFilter 
        sortBy={sortBy} 
        setSortBy={setSortBy} 
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', padding: '10px' }}>
        {displayedStocks.length > 0 ? (
          displayedStocks.map(stock => (
            <div key={stock.id} style={{ border: '1px solid black', padding: '10px', width: '250px' }}>
              <img src={stock.image} width="70" alt="stock" />
              <div><strong>Date:</strong> {stock.date}</div>
              <div><strong>Open:</strong> {stock.open}</div>
              <div><strong>Close:</strong> {stock.close}</div>
              <div><strong>Volume:</strong> {stock.volume.toLocaleString()}</div>
            </div>
          ))
        ) : (
          <p style={{ padding: '20px' }}>No stocks found for the selected date range.</p>
        )}
      </div>
    </div>
  );
}

export default App;

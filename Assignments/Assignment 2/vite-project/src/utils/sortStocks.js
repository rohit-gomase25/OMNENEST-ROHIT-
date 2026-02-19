export function getFilteredAndSortedStocks(stocks, sortBy, startDate, endDate) {
  // 1. Filter Logic
  let filteredStocks = stocks.filter(stock => {
    const stockDate = new Date(stock.date);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    if (start && stockDate < start) return false;
    if (end && stockDate > end) return false;
    
    return true;
  });

  // 2. Sort Logic
  if (sortBy === 'date-latest') {
    return filteredStocks.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
  if (sortBy === 'date-oldest') {
    return filteredStocks.sort((a, b) => new Date(a.date) - new Date(b.date));
  }
  if (sortBy === 'close-high-low') {
    return filteredStocks.sort((a, b) => b.close - a.close);
  }
  if (sortBy === 'close-low-high') {
    return filteredStocks.sort((a, b) => a.close - b.close);
  }
  if (sortBy === 'volume-high-low') {
    return filteredStocks.sort((a, b) => b.volume - a.volume);
  }
  if (sortBy === 'open-high-low') {
    return filteredStocks.sort((a, b) => b.open - a.open);
  }

  return filteredStocks;
}

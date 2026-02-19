import { useState, useEffect, useRef } from 'react';

export function useProductSearch(products) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const debounceTimer = useRef(null);

  useEffect(() => {
    if (searchTerm.trim()) {
      setIsSearching(true);
    } else {
      setFilteredProducts(products);
      setIsSearching(false);
      return;
    }

    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(() => {
      const query = searchTerm.toLowerCase();
      const filtered = products.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      );
      setFilteredProducts(filtered);
      setIsSearching(false);
    }, 500);

    return () => clearTimeout(debounceTimer.current);
  }, [searchTerm, products]);

  return { searchTerm, setSearchTerm, filteredProducts, isSearching };
}

// src/sortandfilter/Logic.jsx
// This file was already correct — no changes needed

import { useState } from 'react';

export function useSorting(products) {

  const [sortBy, setSortBy] = useState('default');

  const getSortedProducts = (items) => {
    const copy = [...items];

    if (sortBy === 'price-low-high') {
      return copy.sort((a, b) => a.price - b.price);
    }

    if (sortBy === 'price-high-low') {
      return copy.sort((a, b) => b.price - a.price);
    }

    if (sortBy === 'name-az') {
      return copy.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortBy === 'rating') {
      return copy.sort((a, b) => b.rating - a.rating);
    }

    return copy;
  };

  const sortedProducts = getSortedProducts(products);

  return {
    sortBy,
    setSortBy,
    sortedProducts,
  };
}



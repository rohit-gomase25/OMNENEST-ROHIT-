import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import { useProductSearch } from '../hooks/useProductSearch';

function ProductList({ onViewDetails, wishlistTools }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Destructuring the search hook
  const { searchTerm, setSearchTerm, filteredProducts, isSearching } = useProductSearch(products);

  // Fetch Categories on mount
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error("Error fetching categories:", err));
  }, []);

  // Fetch Products based on Category
  useEffect(() => {
    setLoading(true);
    const url = selectedCategory === 'all'
      ? 'https://fakestoreapi.com/products'
      : `https://fakestoreapi.com/products/category/${selectedCategory}`;
    
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch products');
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [selectedCategory]);

  if (loading) return <div style={{ textAlign: 'center', padding: '100px', fontSize: '20px' }}>Loading products...</div>;
  if (error) return <div style={{ textAlign: 'center', padding: '100px', color: 'red' }}>Error: {error}</div>;

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '20px' }}>Product Store</h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isSearching={isSearching}
      />

      {/* Category Selection Pills */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '30px', flexWrap: 'wrap' }}>
        <button
          onClick={() => setSelectedCategory('all')}
          style={getBtnStyle(selectedCategory === 'all')}
        >
          All Products
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={getBtnStyle(selectedCategory === cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', 
        gap: '24px' 
      }}>
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onViewDetails={onViewDetails}
            // Passing wishlist tools to each card
            isLiked={wishlistTools.isInWishlist(product.id)}
            onToggleWishlist={wishlistTools.toggleWishlist}
          />
        ))}
      </div>
      
      {filteredProducts.length === 0 && !loading && (
        <div style={{ textAlign: 'center', marginTop: '40px', color: '#666' }}>
          No products found matching "{searchTerm}"
        </div>
      )}
    </div>
  );
}

// Helper for button styles
const getBtnStyle = (isActive) => ({
  padding: '10px 24px',
  backgroundColor: isActive ? '#0066cc' : '#f0f2f5',
  color: isActive ? 'white' : '#555',
  border: 'none',
  borderRadius: '50px',
  cursor: 'pointer',
  textTransform: 'capitalize',
  fontWeight: '600',
  fontSize: '14px',
  transition: 'all 0.2s ease-in-out',
  boxShadow: isActive ? '0 4px 12px rgba(0, 102, 204, 0.3)' : 'none'
});

export default ProductList;
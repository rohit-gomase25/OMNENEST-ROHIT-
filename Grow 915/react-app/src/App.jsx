import { useState } from 'react';
import { useCart } from './context/CartContext';
import { useWishlist } from './hooks/useWishlist';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import BackToTop from './components/BackToTop'; //

function App() {
  const [currentView, setCurrentView] = useState('products');
  const [selectedProductId, setSelectedProductId] = useState(null);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const handleViewDetails = (productId) => {
    setSelectedProductId(productId);
    setCurrentView('detail');
    // Scroll to top when switching to detail view
    window.scrollTo(0, 0);
  };

  const handleBackToProducts = () => {
    setCurrentView('products');
    setSelectedProductId(null);
  };

  const handleViewCart = () => {
    setCurrentView('cart');
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.title} added to cart!`);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5', position: 'relative' }}>
      <Navbar onViewCart={handleViewCart} />
      
      {currentView === 'products' && (
        <ProductList 
          onViewDetails={handleViewDetails} 
          wishlistTools={{ toggleWishlist, isInWishlist }}
        />
      )}
      
      {currentView === 'detail' && (
        <ProductDetail
          productId={selectedProductId}
          onBack={handleBackToProducts}
          onAddToCart={handleAddToCart}
        />
      )}
      
      {currentView === 'cart' && (
        <Cart onClose={handleBackToProducts} />
      )}

      {/* Floating UI Components */}
      <BackToTop /> {/* */}
    </div>
  );
}

export default App;
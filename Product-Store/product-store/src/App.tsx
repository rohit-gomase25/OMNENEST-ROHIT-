import { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import type { Product } from './types/product';
 
function App() {
 
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
 
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) throw new Error("Server error: " + response.status);
        return response.json();
      })
      .then((data: Product[]) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);
 
  if (isLoading) {
    return (
      <div style={{ padding: "40px", fontFamily: "Arial" }}>
        <p>Loading products...</p>
      </div>
    );
  }
 
  if (error !== null) {
    return (
      <div style={{ padding: "40px", fontFamily: "Arial", color: "red" }}>
        <p>Something went wrong: {error}</p>
      </div>
    );
  }
 
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "24px" }}>
      <h1 style={{ marginBottom: "8px" }}>Product Store</h1>
      <p style={{ color: "#64748B", marginBottom: "24px" }}>
        {products.length} products loaded from fakestoreapi.com
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
 
export default App;

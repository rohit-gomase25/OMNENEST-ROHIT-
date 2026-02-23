import { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import type { Product } from './types/product';
 
function App() {
 
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [apiCategory, setApiCategory] = useState<string>("all");
  const [totalProductCount, setTotalProductCount] = useState<number>(0);

  const categoryUrls: Record<string, string> = {
    all: "https://fakestoreapi.com/products",
    electronics: "https://fakestoreapi.com/products/category/electronics",
    jewelery: "https://fakestoreapi.com/products/category/jewelery",
    "men's clothing": "https://fakestoreapi.com/products/category/men's%20clothing",
    "women's clothing": "https://fakestoreapi.com/products/category/women's%20clothing",
  };

  useEffect(() => {
    setIsLoading(true);
    const url = categoryUrls[apiCategory] || categoryUrls["all"];
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("Server error: " + response.status);
        return response.json();
      })
      .then((data: Product[]) => {
        setProducts(data);
        if (apiCategory === "all") {
          setTotalProductCount(data.length);
        }
        setIsLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [apiCategory]);
 
  if (isLoading) {
    return (
      <div style={{ fontFamily: "Arial, sans-serif", padding: "24px" }}>
        <h1 style={{ marginBottom: "8px" }}>Product Store</h1>
        <p style={{ color: "#64748B", marginBottom: "24px" }}>Loading products...</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: "220px",
                height: "320px",
                backgroundColor: "#E2E8F0",
                borderRadius: "8px",
                animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              }}
            />
          ))}
        </div>
        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}</style>
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
 
  const filteredProducts = products;

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "24px" }}>
      <h1 style={{ marginBottom: "8px" }}>Product Store</h1>
      <p style={{ color: "#64748B", marginBottom: "24px" }}>
        Showing {products.length} of {totalProductCount} products
      </p>

      {/* API Category Selector */}
      <div style={{ marginBottom: "24px", padding: "16px", backgroundColor: "#F1F5F9", borderRadius: "8px" }}>
        <p style={{ marginBottom: "12px", fontWeight: "bold" }}>Browse by Category:</p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {["all", "electronics", "jewelery", "men's clothing", "women's clothing"].map((cat) => (
            <button
              key={cat}
              onClick={() => setApiCategory(cat)}
              style={{
                padding: "10px 16px",
                backgroundColor: apiCategory === cat ? "#0284C7" : "#E2E8F0",
                color: apiCategory === cat ? "#fff" : "#1E293B",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: apiCategory === cat ? "bold" : "normal",
                fontSize: "14px",
              }}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {filteredProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
 
export default App;

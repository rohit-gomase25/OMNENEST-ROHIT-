import { useState } from "react";
import type { Product } from "../types/product";

 
interface ProductCardProps {
  product: Product;
}
 
function ProductCard({ product }: ProductCardProps) {
  const [showDescription, setShowDescription] = useState<boolean>(false);
 
  const cardStyle: React.CSSProperties = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    width: "220px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    backgroundColor: "#fff",
  };
 
  return (
    <div style={cardStyle}>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100%", height: "160px", objectFit: "contain" }}
      />
      <p style={{ fontSize: "12px", color: "#64748B", textTransform: "capitalize" }}>
        {product.category}
      </p>
      <p style={{ fontSize: "14px", fontWeight: "bold",
        overflow: "hidden", display: "-webkit-box",
        WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
        {product.title}
      </p>
      <p style={{ fontSize: "18px", color: "#15803D", fontWeight: "bold" }}>
        ${product.price.toFixed(2)}
      </p>
      <p style={{ fontSize: "13px", color: "#B45309" }}>
        ⭐ {product.rating.rate} ({product.rating.count} reviews)
      </p>
      <button
        onClick={() => setShowDescription(!showDescription)}
        style={{
          padding: "8px 16px",
          backgroundColor: "#0284C7",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "14px"
        }}
      >
        {showDescription ? "Hide Details" : "Show Details"}
      </button>
      {showDescription && (
        <p style={{ fontSize: "12px", color: "#475569", lineHeight: "1.5", marginTop: "8px" }}>
          {product.description}
        </p>
      )}
    </div>
  );
}
 
export default ProductCard;

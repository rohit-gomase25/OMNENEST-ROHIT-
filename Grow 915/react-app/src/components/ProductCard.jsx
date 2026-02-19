function ProductCard({ product, onViewDetails, isLiked, onToggleWishlist }) {
  return (
    <div 
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '15px',
        background: 'white',
        cursor: 'pointer',
        position: 'relative', // Added for positioning heart
        transition: 'transform 0.2s, box-shadow 0.2s'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
      onClick={() => onViewDetails(product.id)}
    >
      {/* Heart Toggle Button */}
      <button 
        onClick={(e) => {
          e.stopPropagation(); // Prevents card detail from opening
          onToggleWishlist(product.id);
        }}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'white',
          border: '1px solid #eee',
          borderRadius: '50%',
          width: '35px',
          height: '35px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          zIndex: 2,
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
      >
        {isLiked ? '❤️' : '🤍'}
      </button>

      <img
        src={product.image}
        alt={product.title}
        style={{ width: '100%', height: '200px', objectFit: 'contain', marginBottom: '10px' }}
      />
      
      <h3 style={{ fontSize: '14px', margin: '0 0 10px 0', height: '40px', overflow: 'hidden' }}>
        {product.title}
      </h3>
      
      <div style={{ marginBottom: '10px' }}>
        <span style={{ color: '#ff9900' }}>
          {'★'.repeat(Math.floor(product.rating.rate))}
        </span>
        <span style={{ marginLeft: '5px', fontSize: '12px', color: '#666' }}>
          ({product.rating.count})
        </span>
      </div>
      
      <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#0066cc', margin: 0 }}>
        ${product.price}
      </p>
    </div>
  );
}

export default ProductCard;
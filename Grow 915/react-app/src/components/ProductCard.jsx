import { useToggle } from '../hooks/useToggle';

function ProductCard({ product, onViewDetails, isLiked, onToggleWishlist }) {
  const [showDesc, toggleDesc] = useToggle(false);

  return (
    <div 
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: '16px',
        padding: '20px',
        background: 'white',
        cursor: 'pointer',
        position: 'relative',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        height: 'auto', 
        minHeight: '400px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        overflow: 'hidden' 
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
      }}
      onClick={() => onViewDetails(product.id)}
    >
      {/* Wishlist Heart Button */}
      <button 
        onClick={(e) => {
          e.stopPropagation(); 
          onToggleWishlist(product.id);
        }}
        style={{
          position: 'absolute', top: '15px', right: '15px',
          background: 'rgba(255, 255, 255, 0.9)', border: 'none',
          borderRadius: '50%', width: '36px', height: '36px',
          cursor: 'pointer', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: '18px', zIndex: 2,
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
        }}
      >
        {isLiked ? '❤️' : '🤍'}
      </button>

      {/* Image Container */}
      <div style={{ width: '100%', height: '180px', display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
      </div>
      
      {/* Info Section */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ 
          fontSize: '14px', 
          margin: '0 0 10px 0', 
          color: '#333',
          lineHeight: '1.4',
          minHeight: '40px' 
        }}>
          {product.title}
        </h3>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '10px' }}>
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#0066cc', margin: 0 }}>
            ${product.price}
          </p>
          <span style={{ fontSize: '12px', color: '#f1c40f', fontWeight: 'bold' }}>
            ★ {product.rating.rate}
          </span>
        </div>

        {/* Toggle Description Section */}
        <div style={{ marginTop: 'auto', borderTop: '1px solid #f0f0f0', paddingTop: '10px' }}>
          <button
            onClick={(e) => {
              e.stopPropagation(); 
              toggleDesc();
            }}
            style={{
              background: 'none',
              border: 'none',
              // DYNAMIC COLOR: Blue for "Show", Black for "Hide"
              color: showDesc ? '#000000' : '#0066cc', 
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: '600',
              padding: '5px 0',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}
          >
            {showDesc ? '▲ Hide Description' : '▼ Show Description'}
          </button>

          {showDesc && (
            <div style={{ 
              fontSize: '12px', 
              color: '#666', 
              marginTop: '10px',
              lineHeight: '1.5',
              maxHeight: '150px',
              overflowY: 'auto',
              paddingBottom: '10px'
            }}>
              {product.description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
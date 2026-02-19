
function SortandFilter({ sortBy, setSortBy }) {   // ← receive as props

  return (
    <div style={{ padding: '20px' }}>
      <h1>E-commerce Product Catalog</h1>

      <div style={{
        marginTop: '20px',
        marginBottom: '20px',
        padding: '15px',
        background: '#f0ebeb',
        borderRadius: '4px'
      }}>
        <label style={{ marginRight: '10px', fontWeight: 'bold' }}>
          Sort By:
        </label>

        <select
          value={sortBy}              // ← uses prop, not local state
          onChange={(e) => setSortBy(e.target.value)}  // ← updates hook state
          style={{
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}
        >
          <option value="default">Default</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="name-az">Name: A to Z</option>
          <option value="rating">Rating: High to Low</option>
        </select>
      </div>

    </div>
  );
}

export default SortandFilter;

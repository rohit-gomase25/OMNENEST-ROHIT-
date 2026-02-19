import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Portfolio from './Portfolio';
import { useNavigate } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';
import { products } from './Products';
import ProductCard from './ProductCard';
import SortandFilter from './sortandfilter/SortandFilter';
import { useSorting } from './sortandfilter/Logic';

function MainContent() {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // useSorting hook owns sortBy state + sorting logic
  // sortBy + setSortBy are passed DOWN to SortandFilter as props
  // sortedProducts is the result — mapped into ProductCard below
  const { sortBy, setSortBy, sortedProducts } = useSorting(products);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser) {
      navigate('/');
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem('user');
    navigate('/');
  };

  const userData = {
    profilePic: user?.picture || 'https://via.placeholder.com/100',
    name:       user?.name || user?.email || 'Guest',
    age:        28,
    value:      '₹2,50,000',
  };

  if (showPortfolio) {
    return (
      <Portfolio
        profilePic={userData.profilePic}
        name={userData.name}
        age={userData.age}
        value={userData.value}
        onBack={() => setShowPortfolio(false)}
      />
    );
  }

  return (
    <div>
      <Header />

      {/* User Dashboard */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>Dashboard</h2>
        <img
          src={userData.profilePic}
          alt="Profile"
          style={{ borderRadius: '50%', width: '100px' }}
        />
        <h3>{userData.name}</h3>
        {user?.email && <p>Email: {user.email}</p>}
        <p>Age: {userData.age}</p>
        <p>Portfolio Value: {userData.value}</p>

        <button onClick={() => setShowPortfolio(true)}>View Portfolio</button>
        <br /><br />
        <button onClick={handleLogout}>Logout</button>
      </div>

      <hr />

      <div style={{ padding: '20px' }}>

        
        <SortandFilter sortBy={sortBy} setSortBy={setSortBy} />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '20px',
          marginTop: '20px',
        }}>
          
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default MainContent;

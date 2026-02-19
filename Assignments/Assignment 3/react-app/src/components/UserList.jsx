import { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Replace with your actual API endpoint URL
  const API_URL = 'https://fakestoreapi.com/users';

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  if (loading) return <p>Loading users...</p>;

  return (
    <div style={containerStyle}>
      {users.map((user) => (
        <div key={user.id} style={cardStyle}>
          <div style={avatarStyle}>
            {user.name.firstname[0].toUpperCase()}
            {user.name.lastname[0].toUpperCase()}
          </div>
          
          <h3 style={{ textTransform: 'capitalize', margin: '10px 0 5px' }}>
            {user.name.firstname} {user.name.lastname}
          </h3>
          
          <p style={emailStyle}>{user.email}</p>
          
          <div style={addressBoxStyle}>
            <strong>Location:</strong><br />
            {user.address.number} {user.address.street},<br />
            {user.address.city}, {user.address.zipcode}
          </div>
          
          <p style={{ fontSize: '0.85rem' }}>📞 {user.phone}</p>
        </div>
      ))}
    </div>
  );
};

// --- STYLES ---
// ... (keep the rest of your UserList code the same)

// --- UPDATED STYLES FOR VISIBILITY ---

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  justifyContent: 'center',
  padding: '20px',
};

const cardStyle = {
  width: '280px',
  backgroundColor: '#242424', // Slightly lighter card color
  border: '1px solid #444',
  borderRadius: '12px',
  padding: '20px',
  textAlign: 'center',
  boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
  color: '#ffffff' // Force global card text to white
};

const avatarStyle = {
  width: '60px',
  height: '60px',
  backgroundColor: '#646cff',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  color: 'white'
};

const emailStyle = {
  color: '#8389ff', // Lightened the blue so it's visible on dark
  fontSize: '0.9rem',
  marginBottom: '15px',
  wordBreak: 'break-all'
};

const addressBoxStyle = {
  fontSize: '0.8rem',
  textAlign: 'left',
  backgroundColor: '#333', // Lighter box background
  color: '#e0e0e0',       // Light gray text for the address
  padding: '12px',
  borderRadius: '8px',
  lineHeight: '1.4',
  marginBottom: '10px',
  textTransform: 'capitalize'
};

const phoneStyle = {
  fontSize: '0.85rem',
  color: '#ffa0a0', // Light coral color for the phone text
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '5px'
};

export default UserList;
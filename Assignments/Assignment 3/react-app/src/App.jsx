import UserList from './components/UserList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header style={{ textAlign: 'center', padding: '40px 0' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Team Directory</h1>
        <p style={{ opacity: 0.7 }}>Real-time user data from API</p>
      </header>
      
      <main>
        <UserList />
      </main>
    </div>
  );
}

export default App;
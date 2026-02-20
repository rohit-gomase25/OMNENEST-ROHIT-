import { useScrollPosition } from '../hooks/useScrollPosition';

function BackToTop() {
  const scrollY = useScrollPosition();
  const isVisible = scrollY > 300;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: '#0066cc',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        fontSize: '24px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.2s, background-color 0.2s'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = '#0052a3';
        e.currentTarget.style.transform = 'scale(1.1)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = '#0066cc';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      ↑
    </button>
  );
}

export default BackToTop;
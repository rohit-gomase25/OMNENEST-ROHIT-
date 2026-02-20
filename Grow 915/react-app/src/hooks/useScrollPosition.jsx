import { useState, useEffect } from 'react';

export function useScrollPosition() {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener('scroll', updatePosition);

    // Clean up listener on unmount
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPos;
}
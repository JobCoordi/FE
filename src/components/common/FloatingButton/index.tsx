'use client';

import { useEffect, useState } from 'react';

export default function FloatingButton() {
  const [show, setShow] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    show && (
      <button
        className="fixed bottom-30 right-10 w-14 h-14 rounded-full bg-orange-400 text-white text-2xl flex items-center justify-center shadow-lg hover:bg-amber-400 transition-all duration-500 animate-bounce z-50"
        onClick={scrollToTop}
      >
        ↑
      </button>
    )
  );
}

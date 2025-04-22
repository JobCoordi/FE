'use client';  

import '@/styles/globals.css';
import SmoothScroll from '@/hooks/useSmoothScroll';
import FloatingButton from '@/components/common/FloatingButton';
import { useState , useEffect} from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const handledarkClick = () => {
    if (typeof window !== 'undefined') {
      const isDark = document.documentElement.classList.contains('dark');
      if (isDark) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <SmoothScroll>
      <html lang="ko">
        <body>
          <main>
            {children}
            <FloatingButton
              openSubMenu={openSubMenu}
              handleMenuClick={() => setOpenSubMenu((prev) => !prev)}
              handleLanguageClick={() => console.log('언어 변경')}
              handledarkClick={handledarkClick}
            />
          </main>
        </body>
      </html>
    </SmoothScroll>
  );
}

'use client';

import { FloatingButtonProps } from '@/types/floatingbutton';
import useScrollVisibility from '@/hooks/useScrollVisibility';

export default function FloatingButton({ 
  type,
  scrollRef
}: FloatingButtonProps) {
  const show = useScrollVisibility(scrollRef, 200);

  const scrollToTop = () => {
    const target = scrollRef?.current || window;
    target.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderFloatingButton = () => {
    switch(type) {
      case 'upscroll':
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
      default:
        return null;
    }
  };
  
  return <div>{renderFloatingButton()}</div>
}


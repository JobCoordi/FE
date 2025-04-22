'use client';

import { FloatingButtonProps } from '@/types/floatingbutton';

export default function FloatingButton({
  openSubMenu,
  handleMenuClick,
  handleLanguageClick,
  handledarkClick,
}: FloatingButtonProps) {
  return (
    <div className="fixed bottom-18 right-12 flex flex-col item-end">
      {openSubMenu && (
        <ul className="mb-3 list-none p-0">
          <li className="mt-2">
            <button
              className="w-17 h-17 rounded-full bg-amber-300 text-black text-xs flex items-center justify-center  hover:bg-amber-400 "
              onClick={handleLanguageClick}
            >
              언어변환
            </button>
          </li>
          <li className="mt-2">
            <button
              className="w-17 h-17 rounded-full bg-amber-300 text-black text-xs flex items-center justify-center  hover:bg-amber-400 "
              onClick={handledarkClick}
            >
              다크모드
            </button>
          </li>
        </ul>
      )}
      <button
        className="w-17 h-17 rounded-full hover:bg-amber-400 hover:rotate-90 transition-all duration-200 bg-orange-400 text-white text-lg flex items-center justify-center"
        onClick={handleMenuClick}
      >
        +
      </button>
    </div>
  );
}

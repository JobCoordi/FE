'use client';
import React from 'react';
import { CustomChatBubbleProps } from '@/types/chatbubble';

export default function ChatBubble({
  type,
  value = '',
  userStatus = true,
  alignRight,
}: CustomChatBubbleProps) {
  const renderChatBubble = () => {
    switch (type) {
      case 'chat':
        return (
          <div className={`w-full flex ${alignRight ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`
                whitespace-pre-wrap break-words px-3 py-1 rounded-md text-black max-w-[70%]
                ${userStatus ? 'bg-amber-300' : 'bg-white'}
              `}
            >
              {value}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{renderChatBubble()}</div>;
}

import React from 'react';

interface ChatBubbleProps {
  message: string;
  isUser: boolean;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ message, isUser }) => (
  <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
    <div
      className={`max-w-[80%] p-3 rounded-lg ${
        isUser
          ? 'bg-purple-600 text-white rounded-br-none'
          : 'bg-gray-100 text-gray-800 rounded-bl-none'
      }`}
    >
      {message}
    </div>
  </div>
);
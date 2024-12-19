import React from 'react';
import { X } from 'lucide-react';

interface ChatHeaderProps {
  onClose: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ onClose }) => (
  <div className="p-4 bg-purple-600 text-white rounded-t-lg flex justify-between items-center">
    <h3 className="font-semibold">AI Assistant</h3>
    <button onClick={onClose} className="hover:text-gray-200">
      <X className="w-5 h-5" />
    </button>
  </div>
);
import React from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  message: string;
  setMessage: (message: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ message, setMessage, onSubmit }) => (
  <form onSubmit={onSubmit} className="p-4 border-t">
    <div className="flex gap-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      />
      <button
        type="submit"
        className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition-colors"
      >
        <Send className="w-5 h-5" />
      </button>
    </div>
  </form>
);
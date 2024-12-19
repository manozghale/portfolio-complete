import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { ChatHeader } from './chat/ChatHeader';
import { ChatBubble } from './chat/ChatBubble';
import { ChatInput } from './chat/ChatInput';

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setMessages(prev => [...prev, { text: message, isUser: true }]);
    setIsLoading(true);

    try {
      // TODO: Replace with actual OpenAI API call
      const response = await new Promise(resolve => 
        setTimeout(() => resolve("I'm an AI assistant. How can I help you today?"), 1000)
      );
      setMessages(prev => [...prev, { text: response as string, isUser: false }]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
      setMessage('');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96 flex flex-col h-[500px]">
          <ChatHeader onClose={() => setIsOpen(false)} />
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <ChatBubble key={index} message={msg.text} isUser={msg.isUser} />
            ))}
            {isLoading && (
              <ChatBubble message="Typing..." isUser={false} />
            )}
          </div>

          <ChatInput 
            message={message}
            setMessage={setMessage}
            onSubmit={handleSubmit}
          />
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default ChatAssistant;
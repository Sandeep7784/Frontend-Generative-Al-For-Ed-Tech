import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';

const ChatComponent = () => {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([{ text: 'Hello! How can I help you?', sender: 'bot' }]);
  const messagesRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  };

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim() !== '') {
      setMessages([...messages, { text: userInput, sender: 'user' }]);
      setUserInput('');
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div className="flex-1 p-2 sm:p-6 justify-between flex flex-col min-h-screen">
        <div className="bg-white overflow-hidden flex-1 max-h-screen px-4 sm:px-6 lg:px-8" ref={messagesRef}>
          <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`${
                    message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300'
                  } p-2 rounded`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="fixed bottom-0 left-0 w-full bg-white border-t-2 border-gray-200 px-4 py-2">
          <div className="flex items-center">
            <input
              type="text"
              value={userInput}
              onChange={handleUserInput}
              placeholder="Type your message..."
              className="flex-1 appearance-none rounded-l-md py-2 px-4 border-t border-b border-l text-gray-700 leading-tight focus:outline-none"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md focus:outline-none"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChatComponent;

import React from 'react';
import { useDiscordStore } from '../discordStore.js';
import { useState } from 'react';

export default function ChatRoom({ currentChannel }) {
  const [messageInput, setMessage] = useState('');
  const messages = useDiscordStore((state) => state.messages);
  const addMessage = useDiscordStore((state) => state.addMessage);
  console.log(messages);

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      addMessage({ channel: currentChannel, content: messageInput.trim() }); //update
      setMessage('');
    }
  };

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="bg-[#363940] flex-1 flex flex-col">
      {/* Room title */}
      <div className="bg-[#2F3136] text-white p-3 flex items-center">
        <span className="text-2xl font-bold">#</span>
        <span className="ml-2 text-lg">{currentChannel}</span>
      </div>

      {/* Messages list - naka messages per channel lang to, di gumagana swap servers */}
      <div className="flex-1 overflow-y-auto bg-[#2F3136] p-4 space-y-2">
        {messages
          .filter((msg) => msg.channel === currentChannel)
          .map((msg, index) => (
            <div
              key={index}
              className="text-white bg-gray-700 p-2 rounded-md shadow-md"
            >
              {msg.content}
            </div>
          ))}
      </div>

      {/* d2 lagay message */}
      <div className="bg-[#2F3136] p-3 flex items-center">
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={`Message #${currentChannel}`}
          className="flex-1 bg-[#40444b] text-white p-2 rounded-md outline-none"
          onKeyDown={handleEnter}
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
}

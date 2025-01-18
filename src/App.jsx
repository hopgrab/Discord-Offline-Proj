import { useState } from 'react';
import Servers from './components/Servers';
import Channels from './components/Channels';
import ChatRoom from './components/ChatRoom';

export default function App() {
  const [currentChannel, setCurrentChannel] = useState('general');
  const [currentServer, setCurrentServer] = useState(0);
  return (
    <div className="flex h-screen">
      <Servers setCurrentServer={setCurrentServer} />
      <Channels
        setCurrentChannel={setCurrentChannel}
        currentServer={currentServer}
      />
      <ChatRoom currentChannel={currentChannel} currentServer={currentServer} />
    </div>
  );
}

function ChatRoom() {
  const [messages, setMessages] = useState([]); // State para ma store yung mga messages
  const [input, setInput] = useState(""); // just input

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setMessages([...messages, input]); 
      setInput(""); 
    }
  };

  return (
  <div className="bg-[#363940] flex-1 p-4">
    {/* Chat Window */}
    <div
          id="chatWindow"
          className="p-4 space-y-4 h-96 overflow-y-auto bg-[#363940] rounded-t-lg"
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className="p-2 rounded-lg bg-[#363940] shadow text-white"
            >
              {message}
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <form
          onSubmit={handleSendMessage}
          className="p-3 bg-[#363940] rounded-b-lg flex items-center space-x-3"
        >
        {/* Plus Icon */}
        <button
        type="button"
        className="text-gray-400 hover:text-gray-200 flex items-center justify-center w-8 h-8 rounded-full bg-gray-700"> + </button>

        {/* Input Field */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Message #general"
          className="flex-1 bg-gray-700 text-white rounded-full px-4 py-2 focus:outline-none placeholder-gray-400"
        />

        {/* Icon Buttons */}
        <div className="flex items-center space-x-2 text-gray-400">
          <button
            type="button"
            className="hover:text-gray-200 flex items-center justify-center w-8 h-8"
          >
            🎁
          </button>
          <button
            type="button"
            className="hover:text-gray-200 flex items-center justify-center w-8 h-8"
          >
            GIF
          </button>
          <button
            type="button"
            className="hover:text-gray-200 flex items-center justify-center w-8 h-8"
          >
            🙂
          </button>
          <button
            type="button"
            className="hover:text-gray-200 flex items-center justify-center w-8 h-8"
          >
            😞
          </button>
          <button
            type="button"
            className="hover:text-gray-200 flex items-center justify-center w-8 h-8"
          >
            ⤢
          </button>
        </div>
      </form>
    </div>
  
  );
}


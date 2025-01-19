import React from 'react';
import { useDiscordStore } from '../discordStore.js';
import { useState } from 'react';

export default function ChatRoom({}) {
  const [messageInput, setMessage] = useState('');
  const addMessage = useDiscordStore((state) => state.addMessage);
  const currentServer = useDiscordStore((state) => state.currentServer);
  const currentCategory = useDiscordStore((state) => state.currentCategory);
  const currentChannel = useDiscordStore((state) => state.currentChannel);
  const servers = useDiscordStore((state) => state.servers);

  function handleMissingName() {
    const server = servers.find((s) => s.id === currentServer);
    const category = server?.categories.find((c) => c.id === currentCategory);
    const channel = category?.channels.find((ch) => ch.id === currentChannel);

    console.log(server, category, channel);
    // console.log(servers[currentServer].categories[currentCategory]);

    // Handle missing data
    if (!server || !category || !channel) {
      console.log(currentServer);
      console.log(currentCategory);
      console.log(currentChannel);
      // console.log(servers[currentServer].categories[currentCategory]);
      return <div>Empty</div>;
    }

    return servers[currentServer].categories[currentCategory].channels[
      currentChannel
    ].name;
  }

  function handleMissingMsg() {
    const server = servers.find((s) => s.id === currentServer);
    const category = server?.categories.find((c) => c.id === currentCategory);
    const channel = category?.channels.find((ch) => ch.id === currentChannel);

    // Handle missing data
    if (!server || !category || !channel) {
      // console.log(servers[currentServer].categories[currentCategory]);
      return [];
    }

    return servers[currentServer].categories[currentCategory].channels[
      currentChannel
    ].messages;
  }

  const currentChannelName = handleMissingName();
  const currentChannelMesssages = handleMissingMsg();

  console.log(currentChannelMesssages);

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      addMessage(messageInput.trim());
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
      <div className="bg-[#2F3136] text-white p-3 flex items-center">
        <span className="text-2xl font-bold">#</span>
        <span className="ml-2 text-lg">{currentChannelName}</span>
      </div>
      {/* message */}
      <div className="flex-1 overflow-y-auto bg-[#2F3136] p-4 space-y-2">
        {currentChannelMesssages.map((msg, index) => (
          <div className="flex flex-col hover:bg-opacity-10 hover:bg-black rounded-md p-2">
            <div>{msg.date}</div>
            <div key={index} className="text-white">
              {msg.message}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#2F3136] p-3 flex items-center">
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={`Message #${currentChannelName}`}
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

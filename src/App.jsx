import { useState } from 'react';
import Servers from './components/Servers';
import Channels from './components/Channels';
import ChatRoom from './components/ChatRoom';
import { useDiscordStore } from './discordStore.js';

export default function App() {
  const currentChannel = useDiscordStore((state) => state.currentChannel);
  const currentServer = useDiscordStore((state) => state.currentServer);
  const setCurrentServer = useDiscordStore((state) => state.setCurrentServer);
  const setCurrentChannel = useDiscordStore((state) => state.setCurrentChannel);

  return (
    <div className="flex h-screen">
      <Servers setCurrentServer={setCurrentServer} />
      <Channels
        setCurrentChannel={setCurrentChannel}
        currentServer={currentServer}
      />
      <ChatRoom currentChannel={currentChannel} />
    </div>
  );
}

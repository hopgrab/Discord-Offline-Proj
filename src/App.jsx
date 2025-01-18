import Servers from './components/Servers';
import Channels from './components/Channels';
import ChatRoom from './components/ChatRoom';
import ClearStorage from './components/ClearStorage.jsx';
import { useDiscordStore } from './discordStore.js';
import { useState } from 'react';

export default function App() {
  const currentChannel = useDiscordStore((state) => state.currentChannel);
  const setCurrentChannel = useDiscordStore((state) => state.setCurrentCh);

  return (
    <>
      <div className="flex h-screen w-screen">
        <Servers />
        <Channels setCurrentChannel={setCurrentChannel} />
        <ChatRoom currentChannel={currentChannel} />
      </div>
      <ClearStorage />
    </>
  );
}

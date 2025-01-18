import Servers from './components/Servers';
import Channels from './components/Channels';
import ChatRoom from './components/ChatRoom';
import ClearStorage from './components/ClearStorage.jsx';
import Log from './components/Log.jsx';
import { useDiscordStore } from './discordStore.js';
import { useState } from 'react';

export default function App() {
  const setCurrentChannel = useDiscordStore((state) => state.setCurrentCh);

  return (
    <>
      <div className="flex h-screen w-screen">
        <Servers />
        <Channels setCurrentChannel={setCurrentChannel} />
        <ChatRoom />
      </div>
      <div className="fixed top-10 right-10 flex flex-col gap-3">
        <ClearStorage />
        <Log />
      </div>
    </>
  );
}

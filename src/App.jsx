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

import { useState } from 'react';
import Servers from './components/Servers';
import Channels from './components/Channels';
import ChatRoom from './components/ChatRoom';

import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.jpg';

const images = [image1, image2, image3];

export default function App() {
  const [currentChannel, setCurrentChannel] = useState('general'); //-test
  const [currentServer, setCurrentServer] = useState(0); //-test

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

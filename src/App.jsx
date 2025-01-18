import { useState } from 'react';
import { useMessages } from './discordStore';

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

function Servers({ setCurrentServer }) {
  return (
    <div className="bg-[#212226] max-w-18 p-2 gap-3 flex flex-col">
      {images.map((image, index) => (
        <div
          key={index}
          className="dropdown dropdown-hover dropdown-right dropdown-center"
        >
          <button
            className="size-14 bg-gray-600 flex items-center justify-center rounded-full"
            onClick={() => setCurrentServer(index)} //-test
          >
            <div className="avatar">
              <div className="h-full rounded-badge hover:rounded-2xl transition-all duration-200">
                <img src={image} alt={`Server ${index + 1}`} />
              </div>
            </div>
          </button>
          <div
            tabIndex={0}
            className="dropdown-content rounded-lg z-[1] p-2 shadow translate-x-2 max-w-48 whitespace-pre bg-black text-white"
          >
            <div className="w-full">Server Name</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Category({ title, tabChannels, setCurrentChannel }) {
  const [isTabOpen, setTabOpen] = useState(true);

  return (
    <div className="pl-4 collapse gap-2">
      <input type="checkbox" defaultChecked className="h-5 min-h-5" />
      <button
        onClick={() => setTabOpen(!isTabOpen)}
        className="w-full text-left text-white font-bold uppercase collapse-title p-0 min-h-5 h-5 flex"
      >
        <p className="translate-x-[-5px] translate-y-[-4px]">
          <i className="arrow down size-2"></i>
        </p>
        <p>{title}</p>
      </button>
      <div className="collapse-content pl-4 !pb-0 pr-0">
        {tabChannels.map((channel, index) => (
          <button
            key={index}
            onClick={() => setCurrentChannel(channel)}
            className="w-full text-left text-gray-400 hover:text-white flex items-center space-x-2"
          >
            <span className="text-2xl">#</span>
            <span className="overflow-hidden w-full h-6">{channel}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function Channels({ setCurrentChannel, currentServer }) {
  const tab1Channels = ['readme', 'announcements', 'events'];
  const tab2Channels = ['general', 'bot-commands', 'vc-chat', 'test', '123'];
  return (
    <div className="bg-[#303136] w-64 flex flex-col gap-3 overflow-auto">
      <img
        src={images[currentServer]}
        alt="Top Image"
        className="w-full h-32 object-cover"
      />
      <div className="flex flex-col gap-3 py-3">
        <Category
          title="important"
          tabChannels={tab1Channels}
          setCurrentChannel={setCurrentChannel}
        />
        <Category
          title="general"
          tabChannels={tab2Channels}
          setCurrentChannel={setCurrentChannel}
        />
        <Category
          title="anime"
          tabChannels={['vids', 'pics', 'asdf', 'xd', 'time-out', 'amongus']}
          setCurrentChannel={setCurrentChannel}
        />
        <Category
          title="cute-stuff"
          tabChannels={[
            'anime-pics',
            'anime-stuff',
            'uwu',
            'owo',
            'real',
            'memes',
            'this-is-a-long-channel-name',
          ]}
          setCurrentChannel={setCurrentChannel}
        />
        <Category
          title="test"
          tabChannels={['lol']}
          setCurrentChannel={setCurrentChannel}
        />
      </div>
    </div>
  );
}

function ChatRoom({ currentChannel }) {
  const [message, setMessage] = useState('');
  const { messages, addMessage } = useMessages();

  const handleSendMessage = () => {
    if (message.trim()) {
      addMessage({ channel: currentChannel, content: message.trim() }); //update
      setMessage('');
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={`Message #${currentChannel}`}
          className="flex-1 bg-[#40444b] text-white p-2 rounded-md outline-none"
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

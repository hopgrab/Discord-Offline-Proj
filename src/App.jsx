import { useState } from 'react';
import { useMessages } from './discordStore';

const images = ['image1.png', 'image2.png', 'image3.jpg'];

export default function App() {
  return (
    <div className="flex h-screen">
      {/* Servers */}
      <Servers />
      {/* Channels */}
      <Channels />
      {/* Chatroom */}
      <ChatRoom />
    </div>
  );
}

function Servers() {
  return (
    <div className="bg-[#212226] w-18 p-4 space-y-2">
      {images.map((image, index) => (
        <button
          key={index}
          className="w-12 h-12 bg-gray-600 flex items-center justify-center rounded-full"
        >
          <div className="avatar tooltip tooltip-right" data-tip="hello">
            <div className="w-fit rounded-3xl hover:rounded-2xl transition-all duration-200">
              <img src={`./src/assets/${image}`} alt={`Server ${index + 1}`} />
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

function Category(props) {
  const [isTabOpen, setTabOpen] = useState(true);

  return (
    <div>
      <button
        onClick={() => setTabOpen(!isTabOpen)}
        className="w-full text-left text-white font-bold mb-2 uppercase"
      >
        {props.title}
      </button>
      {isTabOpen && (
        <div className="ml-4 space-y-1">
          {props.tabChannels.map((channel, index) => (
            <button
              key={index}
              className="w-full text-left text-gray-400 hover:text-white flex items-center space-x-2"
            >
              <span>#</span>
              <span>{channel}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Channels() {
  const tab1Channels = ['readme', 'announcements', 'events'];
  const tab2Channels = ['general', 'bot-commands', 'vc-chat', 'test', '123'];
  return (
    <div className="bg-[#303136] w-64 p-4 flex flex-col gap-3">
      {/* Top Image - Di pa implemented na maayos need to mag change after mag swap server */}
      <img
        src={`./src/assets/${images[0]}`}
        alt="Top Image"
        className="w-full h-20 object-cover"
      />

      {/* Categories container */}
      <div className="flex flex-col gap-3 py-3">
        <Category title="important" tabChannels={tab1Channels} />
        <Category title="general" tabChannels={tab2Channels} />
      </div>
    </div>
  );
}

function ChatRoom() {
  return <div className="bg-[#363940] flex-1 p-4"></div>;
}

import { useState } from 'react';
import { useMessages } from './discordStore';

export default function App() {
  const images = ['image1.png', 'image2.png', 'image3.jpg'];

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

  function Servers() {
    return (
      <div className="bg-[#212226] w-18 p-4 space-y-2">
        {images.map((image, index) => (
          <button
            key={index}
            className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center"
          >
            <img
              src={`./src/assets/${image}`}
              alt={`Server ${index + 1}`}
              className="w-9 h-9"
            />
          </button>
        ))}
      </div>
    );
  }

  function Channels() {
    const [isTab1Open, setTab1Open] = useState(true);
    const [isTab2Open, setTab2Open] = useState(true);

    const tab1Channels = ['readme', 'announcements', 'events'];
    const tab2Channels = ['general', 'bot-commands', 'vc-chat', 'test', '123'];
    return (
      <div className="bg-[#303136] w-64 p-4">
        {/* Top Image - Di pa implemented na maayos need to mag change after mag swap server */}
        <img
          src={`./src/assets/${images[0]}`}
          alt="Top Image"
          className="w-full h-20 object-cover mb-4"
        />

        {/* tab1 */}
        <div>
          <button
            onClick={() => setTab1Open(!isTab1Open)}
            className="w-full text-left text-white font-bold mb-2"
          >
            IMPORTANT
          </button>
          {isTab1Open && (
            <div className="ml-4 space-y-1">
              {tab1Channels.map((channel, index) => (
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

          {/* tab2 */}
          <div>
            <button
              onClick={() => setTab2Open(!isTab2Open)}
              className="w-full text-left text-white font-bold mb-2"
            >
              GENERAL
            </button>
            {isTab2Open && (
              <div className="ml-4 space-y-1">
                {tab2Channels.map((channel, index) => (
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
        </div>
      </div>
    );
  }

  function ChatRoom() {
    return <div className="bg-[#363940] flex-1 p-4"></div>;
  }
}

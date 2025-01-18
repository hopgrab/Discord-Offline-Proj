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

function Servers(props) {
  return (
    <div className="bg-[#212226] w-18 p-2 space-y-3">
      {images.map((image, index) => (
        <button
          key={index}
          className="size-14 bg-gray-600 flex items-center justify-center rounded-full"
        >
          <div className="avatar tooltip tooltip-right" data-tip="hello">
            <div className="w-fit rounded-badge hover:rounded-2xl transition-all duration-200">
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
    <div className="pl-4 collapse gap-2">
      <input type="checkbox" defaultChecked className="h-5 min-h-5" />
      <button
        onClick={() => setTabOpen(!isTabOpen)}
        className="w-full text-left text-white font-bold uppercase collapse-title p-0 min-h-5 h-5 flex"
      >
        <p className="translate-x-[-5px] translate-y-[-4px]">
          <i className="arrow down size-2"></i>
        </p>
        <p>{props.title}</p>
      </button>
      <div className="collapse-content pl-4 !pb-0 pr-0">
        {props.tabChannels.map((channel, index) => (
          <button
            key={index}
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

function Channels() {
  const tab1Channels = ['readme', 'announcements', 'events'];
  const tab2Channels = ['general', 'bot-commands', 'vc-chat', 'test', '123'];
  return (
    <div className="bg-[#303136] w-64 flex flex-col gap-3 overflow-auto">
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
        <Category
          title="anime"
          tabChannels={['vids', 'pics', 'asdf', 'xd', 'time-out', 'amongus']}
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
        />
        <Category title="test" tabChannels={['lol']} />
      </div>
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
              className="p-2 rounded-lg bg-gray-600 shadow text-white"
            >
              {message}
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <form
          onSubmit={handleSendMessage}
          className="p-3 bg-gray-800 rounded-b-lg flex items-center space-x-3"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Message #general "
            className="flex-1 input input-bordered bg-gray-600 text-white focus:outline-none"
          />
          <button
            type="submit"
            className="btn btn-primary"
          >
            
            Send
          </button>
        </form>
    </div>
  
  );
}


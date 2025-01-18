import React from 'react';
import Category from './Category';
import { images } from '../assets/images.jsx';

export default function Channels({ setCurrentChannel, currentServer }) {
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

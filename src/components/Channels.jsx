import React from 'react';
import Category from './Category';
import { images } from '../assets/images.jsx';

export default function Channels({ setCurrentChannel, currentServer }) {
  const serverChannels = {
    // SERVER 1 Channels
    0: {
      important: ['readme', 'announcements', 'events'],
      general: ['general', 'bot-commands', 'vc-chat', 'test', '123'],
      anime: ['vids', 'pics', 'asdf', 'xd', 'time-out', 'amongus'],
      'cute-stuff': [
        'anime-pics',
        'anime-stuff',
        'uwu',
        'owo',
        'real',
        'memes',
        'this-is-a-long-channel-name',
      ],
      test: ['lol'],
    },
    // SERVER 2 Channels
    1: {
      important: ['readme', 'announcements', 'events'],
      general: ['general', 'bot-commands', 'vc-chat', 'test', '123'],
      anime: ['vids', 'pics', 'asdf', 'xd', 'time-out', 'amongus'],
      'cute-stuff': [
        'anime-pics',
        'anime-stuff',
        'uwu',
        'owo',
        'real',
        'memes',
        'this-is-a-long-channel-name',
      ],
      test: ['lol'],
    },
    // SERVER 3 Channels
    2: {
      important: ['readme', 'announcements', 'events'],
      general: ['general', 'bot-commands', 'vc-chat', 'test', '123'],
      anime: ['vids', 'pics', 'asdf', 'xd', 'time-out', 'amongus'],
      'cute-stuff': [
        'anime-pics',
        'anime-stuff',
        'uwu',
        'owo',
        'real',
        'memes',
        'this-is-a-long-channel-name',
      ],
      test: ['lol'],
    },
  };

  const currentServerChannels = serverChannels[currentServer];

  return (
    <div className="bg-[#303136] w-64 flex flex-col gap-3 overflow-auto">
      <img
        src={images[currentServer]}
        alt="Top Image"
        className="w-full h-32 object-cover"
      />
      <div className="flex flex-col gap-3 py-3">
        {Object.entries(currentServerChannels).map(([title, channels]) => (
          <Category
            key={title}
            title={title}
            tabChannels={channels}
            setCurrentChannel={setCurrentChannel}
          />
        ))}
      </div>
    </div>
  );
}

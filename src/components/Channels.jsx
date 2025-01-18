import React from 'react';
import Category from './Category';
import { useDiscordStore } from '../discordStore.js';
import Modal from './Modal.jsx';

function AddCategory() {
  const addCategory = useDiscordStore((state) => state.addCategory);

  return (
    <Modal
      buttonName="Add Category"
      header="Add Category"
      onSubmit={addCategory}
      id="add-category"
    >
      <button
        className="btn btn-outline"
        onClick={() => document.getElementById('add-category').showModal()}
      >
        Add Category
      </button>
    </Modal>
  );
}
export default function Channels({ setCurrentChannel }) {
  const servers = useDiscordStore((state) => state.servers);
  const currentServer = useDiscordStore((state) => state.currentServer);

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
      <div className="p-4">
        <h1 className="text-white text-2xl font-extrabold">
          {servers.length != 0 && servers[currentServer].name}
        </h1>
      </div>
      <AddCategory />
      <div className="flex flex-col gap-3 py-3">
        {servers[currentServer] && servers[currentServer].categories ? (
          servers[currentServer].categories.map((category, index) => (
            <Category
              key={index}
              title={category.name}
              tabChannels={category.channels}
              setCurrentChannel={setCurrentChannel}
            />
          ))
        ) : (
          <div>No</div>
        )}
      </div>
    </div>
  );
}

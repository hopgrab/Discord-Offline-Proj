import React from 'react';
import { images } from '../assets/images.jsx';
import { useDiscordStore } from '../discordStore.js';

export default function Servers({ setCurrentServer }) {
  const servers = useDiscordStore((state) => state.servers);

  return (
    <div className="bg-[#212226] max-w-18 p-2 gap-3 flex flex-col">
      {servers.map((server, index) => (
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
                <img src={server.image} />
              </div>
            </div>
          </button>
          <div
            tabIndex={0}
            className="dropdown-content rounded-lg z-[1] p-2 shadow translate-x-2 max-w-48 whitespace-pre bg-black text-white"
          >
            <div className="w-full">{`Server ${index}`}</div>
          </div>
        </div>
      ))}
      <button className="btn btn-circle btn-outline text-4xl">
        <span className="h-full ">+</span>
      </button>
    </div>
  );
}

import React from 'react';
import { images } from '../assets/images.jsx';
import { useDiscordStore } from '../discordStore.js';
import Modal from './Modal.jsx';

function AddServerIcon() {
  return (
    <div>
      <button
        className="btn btn-circle btn-outline text-4xl"
        onClick={() => document.getElementById('my_modal_3').showModal()}
      >
        <span className="h-full font-light">+</span>
      </button>
      <Modal>
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-white text-3xl font-bold">Add Server</h1>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </Modal>
    </div>
  );
}

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
      <AddServerIcon />
    </div>
  );
}

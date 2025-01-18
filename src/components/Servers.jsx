import React, { useState } from 'react';
import { useDiscordStore } from '../discordStore.js';
import Modal from './Modal.jsx';

function AddServerIcon() {
  const [messageInput, setMessageInput] = useState('');
  const addServer = useDiscordStore((state) => state.addServer);

  const handleAddServer = () => {
    if (messageInput.trim()) {
      addServer(messageInput);
    }
    setMessageInput('');
  };

  return (
    <div>
      <button
        className="btn btn-circle btn-outline text-4xl size-14"
        onClick={() => document.getElementById('my_modal_3').showModal()}
      >
        <span className="h-full font-light">+</span>
      </button>
      <Modal>
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-white text-3xl font-bold">Add Server</h1>
          <form
            className="p-3 flex items-center justify-center gap-3"
            method="dialog"
          >
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <button
              className="btn btn-outline btn-info modal-action m-0"
              onClick={handleAddServer}
            >
              Add Server
            </button>
          </form>
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
            <div className="w-full">{server}</div>
          </div>
        </div>
      ))}
      <AddServerIcon />
    </div>
  );
}

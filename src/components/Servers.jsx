import React from 'react';
import { useDiscordStore } from '../discordStore.js';
import Modal from './Modal.jsx';

function AddServerIcon() {
  const addServer = useDiscordStore((state) => state.addServer);
  const servers = useDiscordStore((state) => state.servers);
  const setCurrentServer = useDiscordStore((state) => state.setCurrentServer);

  return (
    <Modal
      buttonName="Add Server"
      header="Add Server"
      onSubmit={addServer}
      otherFunctions={() => setCurrentServer(servers.length)}
      id="add-server"
      showImageInput={true}
    >
      <button
        className="btn btn-circle btn-outline text-4xl size-14"
        onClick={() => document.getElementById('add-server').showModal()}
      >
        <span className="h-full font-light">+</span>
      </button>
    </Modal>
  );
}


export default function Servers({}) {
  const setCurrentServer = useDiscordStore((state) => state.setCurrentServer);
  const servers = useDiscordStore((state) => state.servers);

  return (
    <div className="bg-[#212226] max-w-18 p-2 gap-3 flex flex-col">
      {servers.length !== 0 &&
        servers.map((server, index) => (
          <div
            key={server.id || index}
            className="dropdown dropdown-hover dropdown-right dropdown-center"
          >
            <button
              className="size-14 bg-gray-600 flex items-center justify-center rounded-full"
              onClick={() => setCurrentServer(server.id)}
            >
              <div className="avatar">
                <div className="h-full rounded-badge hover:rounded-2xl transition-all duration-200">
                  {server.image && (
                    <img src={URL.createObjectURL(server.image)} alt={server.name} className="w-full h-full object-cover rounded-full" />
                  )}
                </div>
              </div>
            </button>
            <div
              tabIndex={0}
              className="dropdown-content rounded-lg z-[1] p-2 shadow translate-x-2 max-w-48 whitespace-pre bg-black text-white"
            >
              <div className="w-full">{server.name}</div>
            </div>
          </div>
        ))}
      <AddServerIcon />
    </div>
  );
}

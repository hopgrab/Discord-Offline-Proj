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
        className="btn btn-outline w-full"
        onClick={() => document.getElementById('add-category').showModal()}
      >
        Add Category
      </button>
    </Modal>
  );
}

export default function Channels({}) {
  const servers = useDiscordStore((state) => state.servers);
  const currentServer = useDiscordStore((state) => state.currentServer);

  const currentServerData = servers.find(
    (server) => server.id === currentServer
  );

  return (
    <div className="bg-[#303136] w-64 flex flex-col gap-3 overflow-hidden">
      <div className="p-4 overflow-ellipsis whitespace-pre-wrap text-wrap min-w-0">
        <h1 className="text-white text-2xl font-extrabold overflow-ellipsis whitespace-nowrap overflow-hidden">
          {currentServerData ? currentServerData.name : 'Select a server'}
        </h1>
      </div>
      <div className="px-7 flex items-center justify-center">
        {currentServerData && <AddCategory />}
      </div>
      <div className="flex flex-col gap-3 py-3">
        {currentServerData.categories.length != 0 ? (
          currentServerData.categories.map((category, index) => (
            <Category
              key={index}
              title={category.name}
              tabChannels={category.channels}
              currentCategory={category.id}
            />
          ))
        ) : (
          <div className="w-full flex justify-center">
            No categories available.
          </div>
        )}
      </div>
    </div>
  );
}

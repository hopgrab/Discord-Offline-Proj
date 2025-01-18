import React from 'react';
import { useState } from 'react';
import { useDiscordStore } from '../discordStore';
import Modal from './Modal.jsx';

function AddChannel() {
  const addChannel = useDiscordStore((state) => state.addChannel);

  return (
    <Modal
      buttonName="Add Channel"
      header="Add Channel"
      onSubmit={addChannel}
      id="add-channel"
    >
      <button
        onClick={() => document.getElementById('add-channel').showModal()}
        className="h-full"
      >
        +
      </button>
    </Modal>
  );
}

export default function Category({ title, tabChannels, setCurrentChannel }) {
  return (
    <div className="pl-4 collapse gap-2">
      <input type="checkbox" defaultChecked className="h-5 min-h-5" />
      <div className="w-full text-left text-white font-bold uppercase collapse-title p-0 min-h-5 h-5 flex ">
        <p className="translate-x-[-5px] translate-y-[-4px]">
          <i className="arrow down size-2"></i>
        </p>
        <p className="grow">{title}</p>
        <AddChannel />
      </div>
      <div className="collapse-content pl-4 !pb-0 pr-0">
        {tabChannels.map((channel, index) => (
          <button
            key={index}
            onClick={() => setCurrentChannel(channel)}
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

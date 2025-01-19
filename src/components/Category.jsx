import React, { useState } from 'react';
import { useDiscordStore } from '../discordStore';
import Modal from './Modal.jsx';

function AddChannel(props) {
  const addChannel = useDiscordStore((state) => state.addChannel);
  const currentCategory = useDiscordStore((state) => state.currentCategory);
  const setCurrentCategory = useDiscordStore(
    (state) => state.setCurrentCategory
  );

  function handleAddChannel(name) {
    addChannel(name);
  }

  function handlePlusClick() {
    document.getElementById('add-channel').showModal();
    setCurrentCategory(props.currentCategory);
    console.log(currentCategory);
  }

  return (
    <Modal
      buttonName="Add Channel"
      header="Add Channel"
      onSubmit={handleAddChannel}
      id="add-channel"
    >
      <button onClick={handlePlusClick} className="h-full">
        +
      </button>
    </Modal>
  );
}

export default function Category(props) {
  const [isActiveChannel, setActiveChannel] = useState(null);
  const setCurrentChannel = useDiscordStore((state) => state.setCurrentChannel);
  const setCurrentCategory = useDiscordStore(
    (state) => state.setCurrentCategory
  );

  function channelClick(index, channel) {
    setCurrentCategory(props.currentCategory);
    setCurrentChannel(channel.id);
    setActiveChannel(index);
  }

  return (
    <div className="pl-4 collapse gap-2">
      <input type="checkbox" defaultChecked className="h-5 min-h-5" />
      <div className="w-full text-left text-white font-bold uppercase collapse-title p-0 min-h-5 h-5 flex ">
        <p className="translate-x-[-5px] translate-y-[-4px]">
          <i className="arrow down size-2"></i>
        </p>
        <p className="grow">{props.title}</p>
        <AddChannel currentCategory={props.currentCategory} />
      </div>
      <div className="collapse-content pl-0 !pb-0 pr-0">
        {props.tabChannels.map((channel, index) => (
          <button
            key={index}
            onClick={() => channelClick(index, channel)}
            className={`w-full text-left flex items-center space-x-2 pl-4 rounded-md ${
              isActiveChannel == index
                ? 'bg-opacity-10 bg-gray-50 text-white'
                : ' text-gray-400 hover:text-white '
            }`}
          >
            <span className="text-2xl">#</span>
            <span className="overflow-hidden w-full h-6">{channel.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

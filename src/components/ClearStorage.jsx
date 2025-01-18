import React from 'react';
import { useDiscordStore } from '../discordStore';

export default function ClearStorage() {
  return (
    <button
      className="btn btn-error fixed top-10 right-10"
      onClick={() => useDiscordStore.persist.clearStorage()}
    >
      Clear Storage
    </button>
  );
}

import React from 'react';
import { useDiscordStore } from '../discordStore';

export default function ClearStorage() {
  return (
    <button
      className="btn btn-error"
      onClick={() => {
        useDiscordStore.persist.clearStorage();
      }}
    >
      Clear Storage
    </button>
  );
}

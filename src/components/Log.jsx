import React from 'react';
import { useDiscordStore } from '../discordStore';

export default function Log() {
  const servers = useDiscordStore((state) => state.servers);
  return (
    <button className="btn btn-success" onClick={() => console.log(servers)}>
      Log
    </button>
  );
}

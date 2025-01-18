import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useDiscordStore = create(
  persist(
    (set, get) => ({
      servers: [],
      currentServer: 0,
      currentChannel: '',
      messages: [],
      addMessage: (serverId, channelId, message) =>
        set({
          servers: get().servers.map((server) =>
            server.id === serverId
              ? {
                  ...server,
                  categories: server.categories.map((cat) => ({
                    ...cat,
                    channels: cat.channels.map((ch) =>
                      ch.id === channelId
                        ? { ...ch, messages: [...(ch.messages || []), message] }
                        : ch
                    ),
                  })),
                }
              : server
          ),
        }),
      setCurrentServer: (serverId) => {
        set({ currentServer: serverId });
      },
      setCurrentChannel: (channelId) => {
        set({ currentChannel: channelId });
      },
    }),
    { name: 'messages', storage: createJSONStorage(() => sessionStorage) }
  )
);

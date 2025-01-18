import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useDiscordStore = create(
  persist(
    (set, get) => ({
      servers: [],
      currentServer: 0,
      currentChannel: '',
      messages: [],
      setCurrentServer: (serverId) => {
        set({ currentServer: serverId });
      },
      setCurrentChannel: (channelId) => {
        set({ currentChannel: channelId });
      },
      addServer: (serverName) => {
        set({
          servers: [
            ...get().servers,
            { id: get().servers.length, name: serverName, categories: [] },
          ],
        });
      },
      addCategory: (category) =>
        set({
          servers: get().servers.map((server) =>
            server.id == get().currentServer
              ? {
                  ...server,
                  categories: [
                    ...server.categories,
                    {
                      name: category,
                      id: server.categories.length,
                      channels: [],
                    },
                  ],
                }
              : server
          ),
        }),
      addChannel: (serverId, categoryId, channel) =>
        set({
          servers: get().servers.map((server) =>
            server.id === serverId
              ? {
                  ...server,
                  categories: server.categories.map((cat) =>
                    cat.id === categoryId
                      ? { ...cat, channels: [...cat.channels, channel] }
                      : cat
                  ),
                }
              : server
          ),
        }),
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
    }),
    { name: 'messages', storage: createJSONStorage(() => sessionStorage) }
  )
);

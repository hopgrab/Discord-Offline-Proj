import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useDiscordStore = create(
  persist(
    (set, get) => ({
      servers: [],
      currentServer: 0,
      currentCategory: 0,
      currentChannel: 0,
      messages: [],
      setCurrentServer: (serverId) => {
        set({ currentServer: serverId });
      },
      setCurrentCategory: (catId) => {
        set({ currentCategory: catId });
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
      addChannel: (channel) =>
        set({
          servers: get().servers.map((server, categoryName) =>
            server.id === get().currentServer
              ? {
                  ...server,
                  categories: server.categories.map((cat) =>
                    cat.id === get().currentCategory
                      ? {
                          ...cat,
                          channels: [
                            ...cat.channels,
                            {
                              name: channel,
                              id: server.categories[categoryId].channels.length,
                              messages: [],
                            },
                          ],
                        }
                      : cat
                  ),
                }
              : server
          ),
        }),
      addMessage: (message) =>
        set({
          servers: get().servers.map((server) =>
            server.id === get().currentServer
              ? {
                  ...server,
                  categories: server.categories.map((category) =>
                    category.id === get().currentCategory
                      ? {
                          ...category,
                          channels: category.channels.map((channel) =>
                            channel.id === get().currentChannel
                              ? {
                                  ...channel,
                                  messages: [...channel.messages, message], // Add the new message
                                }
                              : channel
                          ),
                        }
                      : category
                  ),
                }
              : server
          ),
        }),
    }),
    { name: 'messages', storage: createJSONStorage(() => sessionStorage) }
  )
);

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

function getTodayTimeString() {
  const now = new Date();

  // Get the hours and minutes
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  return `Today at ${hours}:${minutes}`;
}

const convertImageToBase64 = (imageFile) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(imageFile);
  });
};

export const useDiscordStore = create(
  persist(
    (set, get) => ({
      servers: [],
      currentServer: 0,
      currentCategory: 0,
      currentChannel: 0,
      messages: [],
      setCurrentServer: (serverId) => {
        const currentServerCategory = get().servers.find(
          (server) => server.id === serverId
        )?.currentServerCategory;
        const currentServerChannel = get().servers.find(
          (server) => server.id === serverId
        )?.currentServerChannel;

        set({
          currentServer: serverId,
          currentCategory: currentServerCategory,
          currentChannel: currentServerChannel,
        });
      },
      setCurrentCategory: (catId) => {
        if (get().currentServer !== null) {
          set({
            currentCategory: catId,
            servers: get().servers.map((server) =>
              server.id === get().currentServer
                ? { ...server, currentServerCategory: catId }
                : server
            ),
          });
        } else {
          console.warn('No server selected.');
        }
      },
      setCurrentChannel: (channelId) => {
        if (get().currentServer !== null && get().currentCategory !== null) {
          set({
            currentChannel: channelId,
            servers: get().servers.map((server) =>
              server.id === get().currentServer
                ? { ...server, currentServerChannel: channelId }
                : server
            ),
          });
        } else {
          console.warn('No server or category selected.');
        }
      },
      addServer: async (serverName, image) => {
        let base64Image = '';
        if (image) base64Image = await convertImageToBase64(image);

        set({
          servers: [
            ...get().servers,
            {
              id: get().servers.length,
              name: serverName,
              image: base64Image,
              categories: [],
              currentServerCategory: 0,
              currentServerChannel: 0,
            },
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
          servers: get().servers.map((server) =>
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
                              id: server.categories[cat.id].channels
                                ? server.categories[cat.id].channels.length
                                : 0,
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
      addMessage: (message) => {
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
                                  messages: [
                                    ...channel.messages,
                                    {
                                      message: message,
                                      date: getTodayTimeString(),
                                    },
                                  ], // Add the new message
                                }
                              : channel
                          ),
                        }
                      : category
                  ),
                }
              : server
          ),
        });
      },
    }),
    { name: 'messages', storage: createJSONStorage(() => localStorage) }
  )
);

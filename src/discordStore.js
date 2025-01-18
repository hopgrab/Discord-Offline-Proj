import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useDiscordStore = create(
  persist(
    (set, get) => ({
      servers: [],
      messages: [],
      addMessage: (newMessage) =>
        set({
          messages: [...get().messages, newMessage],
        }),
    }),
    { name: 'messages', storage: createJSONStorage(() => sessionStorage) }
  )
);

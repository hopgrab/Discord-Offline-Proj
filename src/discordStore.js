import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useMessages = create(
  persist(
    (set, get) => ({
      servers: [],
      messages: [],
      addMessage: (newMessage) =>
        set((state) => ({
          messages: [...get().messages, newMessage],
        })),
    }),
    { name: 'messages', storage: createJSONStorage(() => sessionStorage) }
  )
);

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useMessages = create((set) => ({
    messages: [],
    addMessage: (newMessage) => set((state) => ({
        messages: [...state.messages, newMessage], 
    })),
}))
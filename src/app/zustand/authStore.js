import { create } from "zustand";



export const authStore = create((set) => ({
    roleAuthDetails: null,
    setRoleAuthDetails: (roleAuthDetails) => set({ roleAuthDetails })
}))
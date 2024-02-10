import { create } from 'zustand'

const useStore = create((set) => ({
    company: null,
}))
export default useStore;

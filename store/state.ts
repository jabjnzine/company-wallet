import { create } from 'zustand'

const useStore = create((set) => ({
    company: null,
    date_from: null,
    date_to: null,
}))
export default useStore;

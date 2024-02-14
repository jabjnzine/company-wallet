import { create } from 'zustand'
import dayjs from "dayjs";
const useStore = create((set) => ({
    company: null,
    date_from: new Date(),
    date_to: new Date(),
    type_date: `request_date`
}))
export default useStore;

import { create } from 'zustand'
import dayjs from "dayjs";
const dateFormat = "YYYY-MM-DD";
const useStore = create((set) => ({
    company: null,
    date_from: dayjs(new Date()).format(dateFormat),
    date_to: dayjs(new Date()).format(dateFormat),
    type_date: `request_date`
}))
export default useStore;

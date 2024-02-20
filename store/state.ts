import { create } from 'zustand'
// import dayjs from "dayjs";
// const useStore = create((set) => ({
//     company: null,
//     date_from: null,
//     setDateFrom: (newDate: any) => set({ date_from: newDate }),
//     date_to: null,
//     type_date: `request_date`
// }))
// export default useStore;
interface DateStore {
    company: string | null,
    type_date: string | null,
    type_income: string | null,
    type_profit: string | null,
    date_from: Date | null;
    date_to: Date | null;
    setDateFrom: (newDate: Date) => void;
    setDateTo: (newDate: Date) => void;
}
const useStore = create<DateStore>((set) => ({
    company: null,
    date_from: new Date(),
    date_to: new Date(),
    setDateFrom: (newDate) => set({ date_from: newDate }),
    setDateTo: (newDate) => set({ date_to: newDate }),
    type_date: `request_date`,
    type_income: `agent`,
    type_profit: `agent`,

}));

export default useStore;
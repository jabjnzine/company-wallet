'use client'
import Image from "next/image";
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";
interface DepositProps {
  someProp: string;
}
const Deposit: React.FC<DepositProps> = ({ someProp }) => {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div className="">
      <div className="time">
        <div className="justify-start items-center gap-2 inline-flex">
          <div className="w-1 h-5 bg-sky-500 rounded-sm" />
          <div className="text-slate-800 text-[16px] font-[600]  leading-normal">
            {someProp}
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
export default Deposit;

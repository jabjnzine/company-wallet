"use client";
import IncomeAgent from "@/components/Transactions/Income/Agent";
import IncomeProduct from "@/components/Transactions/Income/Product";
import useStore from "@/store/state";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra);

export default function Income() {
  const company = useStore((state: any) => state.company);
  const date_from = useStore((state: any) => state.date_from);
  const date_to = useStore((state: any) => state.date_to);

  const items_: TabsProps["items"] = [
    {
      key: "1",
      label: "Agent",
      children: <IncomeAgent />,
    },
    {
      key: "2",
      label: "Product",
      children: <IncomeProduct />,
    },
  ];
  const onChange = (key: string) => {
    // console.log(key);
  };

  return (
    <div>
      <div className=" w-full">
        <div className="text-center text-slate-800 text-xl font-semibold flex justify-center items-center mt-4">
          สรุปรายการบัญชี
        </div>
        <div className="p-4">
          <div className="bg-gradient-to-r from-[#258AD8] to-[#85B7FE] rounded-lg  p-3 text-white space-y-2">
            <div className="flex justify-between ">
              <div className="text-white text-sm font-normal leading-snug">
                รายรับทั้งหมด
              </div>
              <div className="text-white text-xs font-light leading-[18px]">
                ข้อมูล ณ วันที่ {dayjs().locale("th").format("DD MMM BBBB")}
              </div>
            </div>
            <div>
              <div className="text-white text-xs font-light leading-[18px]">
                {company.label}{" "}
              </div>
            </div>
            <div className=" w-[100%] h-[0.50px] bg-white"></div>
            <div className=" flex justify-center text-white text-xl font-semibold leading-[30px]">
              3,104,801.00 บาท
            </div>
            <div>
              <div className="flex justify-between">
                <div className="text-center text-white text-sm font-normal  leading-snug">
                  ยอดจ่ายแล้ว
                </div>
                <div className="text-center text-white text-sm font-medium  leading-tight">
                  2,104,801.00 บาท
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <div className="text-center text-white text-sm font-normal  leading-snug">
                  ยอดค้างจ่าย
                </div>
                <div className="text-center text-white text-sm font-medium  leading-tight">
                  1,000,000.00 บาท
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Tabs
              defaultActiveKey="1"
              items={items_}
              onChange={onChange}
              centered
            />
          </div>
        </div>
      </div>
    </div>
  );
}

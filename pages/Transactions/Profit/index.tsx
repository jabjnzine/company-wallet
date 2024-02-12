import ProfitAgent from "@/components/Transactions/Profit/Agent";
import ProfitProduct from "@/components/Transactions/Profit/Product";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra);
export default function Profit() {
  const items_: TabsProps["items"] = [
    {
      key: "1",
      label: "Agent",
      children: <ProfitAgent />,
    },
    {
      key: "2",
      label: "Product",
      children: <ProfitProduct />,
    },
  ];
  const onChange = (key: string) => {
    // console.log(key);
  };
  return (
    <div>
      <div className="w-full">
        <div className="text-center text-slate-800 text-xl font-semibold flex justify-center items-center mt-4">
          สรุปยอดกำไร
        </div>
      </div>
      <div className="p-4">
        <div className="w-full h-[118.50px] p-3 bg-gradient-to-r from-teal-500 to-teal-300 rounded-lg flex-col justify-center items-start inline-flex">
          <div className="self-stretch h-[94.50px] flex-col justify-center items-start gap-2 flex">
            <div className="self-stretch justify-start items-center inline-flex">
              <div className="grow shrink basis-0 h-[22px] justify-start items-center gap-2 flex">
                <div className="text-white text-sm font-normal  leading-snug">
                  กำไรขั้นต้น
                </div>
              </div>
              <div className="text-white text-xs font-light  leading-[18px]">
                ข้อมูล ณ วันที่ {dayjs().locale("th").format("DD MMM BBBB")}
              </div>
            </div>
            <div className="w-[221px] text-white text-xs font-light  leading-[18px]">
              บริษัท ทีทีดี โกลเบิล จำกัด
            </div>
            <div className="self-stretch h-[0.50px] bg-white"></div>
            <div className="self-stretch justify-center items-center gap-2 inline-flex">
              <div className="text-white text-xl font-semibold  leading-[30px]">
                363,574.34 บาท{" "}
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
  );
}

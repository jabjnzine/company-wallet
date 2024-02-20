"use client";
import useStore from "@/store/state";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "@/config";
import ProfitAgent from "@/components/Transactions/Profit/Agent";
import ProfitProduct from "@/components/Transactions/Profit/Product";
dayjs.extend(buddhistEra);
export default function Profit() {
  const dateFormat = "YYYY-MM-DD";
  const date_from = useStore((state: any) => state.date_from);
  const date_to = useStore((state: any) => state.date_to);
  const type_date = useStore((state: any) => state.type_date);
  const type_profit = useStore((state: any) => state.type_profit);
  const company = useStore((state: any) => state.company);
  const [summary, setSummary] = useState<any>();
  const thbFormatter = new Intl.NumberFormat("th-TH", {
    style: "decimal",
    maximumFractionDigits: 2,
  });
  const items_: TabsProps["items"] = [
    {
      key: "agent",
      label: "Agent",
      children: <ProfitAgent />,
    },
    {
      key: "product",
      label: "Product",
      children: <ProfitProduct />,
    },
  ];
  const onChange = (key: string) => {
    useStore.setState({ type_profit: key });
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${
          config.API_HOST
        }/dashboards/company-wallet/main-profit?date_start=${dayjs(
          date_from
        ).format(dateFormat)}&date_end=${dayjs(date_to).format(
          dateFormat
        )}&company_id=${company.company_id}&date_type=${type_date}`
      );
      setSummary(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
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
              {company?.label}{" "}
            </div>
            <div className="self-stretch h-[0.50px] bg-white"></div>
            <div className="self-stretch justify-center items-center gap-2 inline-flex">
              <div className="text-white text-xl font-semibold  leading-[30px]">
                {thbFormatter.format(summary?.sumProfitTotal)} บาท{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Tabs
            defaultActiveKey={type_profit}
            items={items_}
            onChange={onChange}
            centered
          />
        </div>
      </div>
    </div>
  );
}

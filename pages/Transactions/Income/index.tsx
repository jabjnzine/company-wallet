"use client";
import IncomeAgent from "@/components/Transactions/Income/Agent";
import IncomeProduct from "@/components/Transactions/Income/Product";
import useStore from "@/store/state";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "@/config";
const dateFormat = "YYYY-MM-DD";
dayjs.extend(buddhistEra);
export default function Income() {
  const date_from = useStore((state: any) => state.date_from);
  const date_to = useStore((state: any) => state.date_to);
  const type_date = useStore((state: any) => state.type_date);
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
      children: <IncomeAgent />,
    },
    {
      key: "product",
      label: "Product",
      children: <IncomeProduct />,
    },
  ];
  const onChange = (key: string) => {
    useStore.setState({ type_income: key });
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${
          config.API_HOST
        }/dashboards/company-wallet/main-income?date_start=${dayjs(
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
                {company?.label}{" "}
              </div>
            </div>
            <div className=" w-[100%] h-[0.50px] bg-white"></div>
            <div className=" flex justify-center text-white text-xl font-semibold leading-[30px]">
              {thbFormatter.format(summary?.sumTotal)} บาท
            </div>
            <div>
              <div className="flex justify-between">
                <div className="text-center text-white text-sm font-normal  leading-snug">
                  ยอดจ่ายแล้ว
                </div>
                <div className="text-center text-white text-sm font-medium  leading-tight">
                  {thbFormatter.format(summary?.sumSuccessTotal)} บาท
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <div className="text-center text-white text-sm font-normal  leading-snug">
                  ยอดค้างจ่าย
                </div>
                <div className="text-center text-white text-sm font-medium  leading-tight">
                  {thbFormatter.format(summary?.sumPendingTotal)} บาท
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Tabs
              defaultActiveKey="agent"
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

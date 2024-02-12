"use client";
import Image from "next/image";
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import axios from "axios";
import config from "@/config";
import { useRouter } from "next/navigation";
import useStore from "../../store/state";

const dateFormat = "YYYY-MM-DD";
interface IncomeExpenseProps {
  someProp: string;
  company_id: string;
}
const IncomeExpense: React.FC<IncomeExpenseProps> = ({
  someProp,
  company_id,
}) => {
  const [sum_total, setSumTotal] = useState<any>();
  const [date_from, setDateFrom] = useState<any>(
    dayjs(new Date()).format(dateFormat)
  );
  const [date_to, setDateTo] = useState<any>(
    dayjs(new Date()).format(dateFormat)
  );
  useStore.setState({ date_from: date_from });
  useStore.setState({ date_to: date_to });

  const { push } = useRouter();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${config.API_HOST}/dashboards/company-wallet/main?date_start=${date_from}&date_end=${date_to}&company_id=${company_id}&date_type=${someProp}`
      );
      const format = {
        sumCostTotal: response.data.sumCostTotal.toLocaleString("en-US"),
        sumIncomeTotal: response.data.sumIncomeTotal.toLocaleString("en-US"),
        sumProfitTotal: response.data.sumProfitTotal.toLocaleString("en-US"),
      };
      setSumTotal(format);
    } catch (error) {}
  };
  useEffect(() => {
    // fetchData();
  }, [date_from, date_to, someProp, company_id]);

  const onChangeFrom: DatePickerProps["onChange"] = (date, dateString) => {
    setDateFrom(dateString);
    useStore.setState({ date_from: date_from });
    useStore.setState({ date_to: date_to });
    // fetchData();
  };
  const onChangeTo: DatePickerProps["onChange"] = (date, dateString) => {
    setDateTo(dateString);
    useStore.setState({ date_from: date_from });
    useStore.setState({ date_to: date_to });
    // fetchData();
  };
  const selectMenu = (menu: any) => {
    push(`/Transactions/${menu}`);
  };
  return (
    <div className="">
      <div className="time">
        <div className="justify-start items-center gap-2 inline-flex">
          <div className="w-1 h-5 bg-sky-500 rounded-sm" />
          <div className="text-slate-800 text-[16px] font-[600]  leading-normal">
            ช่วงเวลา
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-3">
          <div>
            <div>จาก </div>
            <div className="mt-1">
              <DatePicker
                onChange={onChangeFrom}
                className="w-[100%]"
                defaultValue={dayjs(date_from)}
                format={dateFormat}
              />
            </div>
          </div>
          <div>
            <div>ถึง </div>
            <div className="mt-1">
              <DatePicker
                onChange={onChangeTo}
                className="w-[100%]"
                defaultValue={dayjs(date_to)}
                format={dateFormat}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="type space-y-3 mt-6">
        <div className="justify-start items-center gap-2 inline-flex">
          <div className="w-1 h-5 bg-sky-500 rounded-sm" />
          <div className="text-slate-800 text-[16px] font-[600]  leading-normal">
            ประเภทรายการ
          </div>
        </div>
        <div
          className="w-full h-14 p-3 bg-white rounded-2xl border border-gray-200 justify-start items-center gap-4 inline-flex"
          onClick={() => selectMenu(`Income`)}
        >
          <div className="p-1 bg-[#F5FBFF] rounded-lg justify-start items-start gap-2.5 flex">
            <div className="w-6 h-6 justify-center items-center flex ">
              <div className="w-6 h-6 relative">
                <Image
                  className="w-6 h-6 rounded-full"
                  src="/icon/card-receive.svg"
                  alt="company"
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 h-[22px] justify-between items-center flex">
            <div className="text-[14px] text-[#474A56] font-[400]">
              รายรับทั้งหมด
            </div>
            <div className="text-[14px] text-[#36BFFA] font-[500]">
              {sum_total?.sumIncomeTotal} บาท
            </div>
          </div>
        </div>
        <div
          className="w-full h-14 p-3 bg-white rounded-2xl border border-gray-200 justify-start items-center gap-4 inline-flex"
          onClick={() => selectMenu(`Expenses`)}
        >
          <div className="p-1 bg-[#F5FBFF] rounded-lg justify-start items-start gap-2.5 flex">
            <div className="w-6 h-6 justify-center items-center flex ">
              <div className="w-6 h-6 relative">
                <Image
                  className="w-6 h-6 rounded-full"
                  src="/icon/card-send.svg"
                  alt="company"
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 h-[22px] justify-between items-center flex">
            <div className="text-[14px] text-[#474A56] font-[400]">
              รายจ่ายทั้งหมด
            </div>
            <div className="text-[14px] text-[#F97066] font-[500]">
              {sum_total?.sumCostTotal} บาท
            </div>
          </div>
        </div>
        <div
          className="w-full h-14 p-3 bg-white rounded-2xl border border-gray-200 justify-start items-center gap-4 inline-flex"
          onClick={() => selectMenu(`Profit`)}
        >
          <div className="p-1 bg-[#F5FBFF] rounded-lg justify-start items-start gap-2.5 flex">
            <div className="w-6 h-6 justify-center items-center flex ">
              <div className="w-6 h-6 relative">
                <Image
                  className="w-6 h-6 rounded-full"
                  src="/icon/trend-up.svg"
                  alt="company"
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 h-[22px] justify-between items-center flex">
            <div className="text-[14px] text-[#474A56] font-[400]">
              กำไรขั้นต้น
            </div>
            <div className="text-[14px] text-[#32D583] font-[500]">
              {sum_total?.sumProfitTotal} บาท
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IncomeExpense;

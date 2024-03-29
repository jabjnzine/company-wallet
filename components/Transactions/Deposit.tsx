"use client";
import Image from "next/image";
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";
import useStore from "@/store/state";
import axios from "axios";
import config from "@/config";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
interface DepositProps {
  someProp: string;
}
const Deposit: React.FC<DepositProps> = ({ someProp }) => {
  const { push } = useRouter();
  const company = useStore((state: any) => state.company);
  const type_deposit = useStore((state: any) => state.type_deposit);
  const [deposits, setDeposits] = useState<any[]>([]);
  const Formatter = new Intl.NumberFormat("th-TH", {
    style: "decimal",
    maximumFractionDigits: 2,
  });
  const fetchData = async () => {
    try {
      const url_supplier = `${config.API_HOST}/dashboards/company-wallet/main-supplier-deposit?company_id=${company.company_id}`;
      const url_agent = `${config.API_HOST}/dashboards/company-wallet/main-agent-deposit?company_id=${company.company_id}`;
      const url = type_deposit === `supplier` ? url_supplier : url_agent;
      const response = await axios.get(url);
      setDeposits(response.data);
    } catch (error) {}
  };
  const selectItem = async (item: any) => {
    if (type_deposit === `supplier`) {
      push(`/Transactions/Deposit/${item.creditor_id}`);
    } else {
      const url = `${config.API_HOST}/dashboards/company-wallet/main-agent-deposit-sub?company_id=${company.company_id}&agent_id=${item.debtor_id}`;
      const response = await axios.get(url);
      if (response.data.length === 0) {
        push(`/Transactions/Deposit/${item.debtor_id}`);
      } else {
        push(`/Transactions/Deposit/Sub/${item.debtor_id}`);
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="time">
        <div className="justify-start items-center gap-2 inline-flex">
          <div className="w-1 h-5 bg-sky-500 rounded-sm" />
          <div className="text-slate-800 text-[16px] font-[600]  leading-normal">
            {someProp}
          </div>
        </div>{" "}
      </div>
      <div className="mt-3 space-y-2">
        {deposits && deposits.length === 0 ? (
          <div>
            <div className="flex justify-center flex-col mt-8 items-center">
              <div>
                <Image
                  alt="line"
                  src="/not_found.png"
                  width={224}
                  height={150}
                />
              </div>
              <div className="text-sky-700 text-xl font-semibold  leading-[30px]">
                ไม่มีรายการ
              </div>
              <div className="text-center text-black  text-sm font-normal leading-snug">
                รายการมัดจำจะแสดงในหน้านี้
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            {deposits.map((item: any, index: number) => (
              <div
                onClick={() => selectItem(item)}
                key={index}
                className="w-full h-[147px] bg-white rounded-lg border border-gray-200 flex-col justify-center items-center inline-flex"
              >
                <div className="self-stretch p-3 justify-start items-center gap-3 inline-flex">
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch text-black text-sm font-normal  leading-snug">
                      {item.name}
                    </div>
                    <div className="self-stretch px-1 bg-gray-50 rounded justify-start items-center gap-1 inline-flex">
                      <div className="w-5 h-5 justify-center items-center flex">
                        <div className="w-5 h-5 relative">
                          <Image
                            className="w-5 h-5 rounded-full"
                            src="/icon/deposit.svg"
                            alt="company"
                            width={0}
                            height={0}
                          />
                        </div>
                      </div>
                      <div className="grow shrink basis-0 text-black  text-sm font-normal  leading-[18px]">
                        คงเหลือ
                      </div>
                      <div className="justify-start items-center gap-1 flex">
                        <div className="text-black  text-base font-semibold  leading-normal">
                          {Formatter.format(item.balance)} บาท
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-px bg-gray-200"></div>
                    <div className="self-stretch justify-between items-center inline-flex">
                      <div className="text-center text-black  text-sm font-normal  leading-snug">
                        ยอดฝากทั้งหมด
                      </div>
                      <div className="text-center text-emerald-400 text-sm font-medium  leading-tight">
                        {Formatter.format(item.inbound)} บาท
                      </div>
                    </div>
                    <div className="self-stretch justify-between items-center inline-flex">
                      <div className="text-center text-black  text-sm font-normal  leading-snug">
                        ยอดใช้ทั้งหมด
                      </div>
                      <div className="text-center text-red-400 text-sm font-medium  leading-tight">
                        {Formatter.format(item.outbound)} บาท
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Deposit;

"use client";
import useStore from "@/store/state";
import Image from "next/image";
import axios from "axios";
import config from "@/config";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

export default function IncomeAgent() {
  const { push } = useRouter();
  const dateFormat = "YYYY-MM-DD";
  const date_from = useStore((state: any) => state.date_from);
  const date_to = useStore((state: any) => state.date_to);
  const type_date = useStore((state: any) => state.type_date);
  const company = useStore((state: any) => state.company);
  const [agents, setAgents] = useState<any[]>([]);
  const thbFormatter = new Intl.NumberFormat("th-TH", {
    style: "decimal",
    maximumFractionDigits: 2,
  });
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${
          config.API_HOST
        }/dashboards/company-wallet/main-profit-agent?date_start=${dayjs(
          date_from
        ).format(dateFormat)}&date_end=${dayjs(date_to).format(
          dateFormat
        )}&company_id=${company.company_id}&date_type=${type_date}`
      );
      setAgents(response.data);
    } catch (error) {}
  };

  const selectItem = async (item: any) => {
    push(`/Transactions/Profit/${item.agent_id_ref}`);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="justify-start items-center gap-2 inline-flex mb-4">
        <div className="w-1 h-5 bg-sky-500 rounded-sm" />
        <div className="text-slate-800 text-[16px] font-[600]  leading-normal">
          รายการทั้งหมด
        </div>
      </div>
      <div className="space-y-2">
        {agents && agents.length === 0 ? (
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
              <div className="text-center text-black text-opacity-20 text-sm font-normal leading-snug">
                รายการบัญชีจะแสดงในหน้านี้
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            {agents.map((item: any, index: number) => (
              <div
                onClick={() => selectItem(item)}
                key={index}
                className="w-full h-[78px] bg-white rounded-lg border border-gray-200 flex-col justify-center items-center inline-flex"
              >
                <div className="self-stretch p-3 justify-start items-center gap-3 inline-flex">
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch text-black text-sm font-normal  leading-snug">
                      {item.debtors_name}
                    </div>
                    <div className="self-stretch px-1 bg-gray-50 rounded justify-start items-center gap-1 inline-flex">
                      <div className="w-5 h-5 justify-center items-center flex">
                        <div className="w-5 h-5 relative">
                          <Image
                            className="rounded-full"
                            src="/icon/profit.svg"
                            alt="company"
                            width={20}
                            height={20}
                          />
                        </div>
                      </div>
                      <div className="grow shrink basis-0 text-black text-opacity-20 text-sm font-normal  leading-[18px]">
                        ยอดกำไร
                      </div>
                      <div className="justify-start items-center gap-1 flex">
                        <div className="w-4 h-4 justify-center items-center flex">
                          <div className="w-4 h-4 relative">
                            <Image
                              className="rounded-full"
                              src="/icon/plus.svg"
                              alt="company"
                              width={16}
                              height={16}
                            />
                          </div>
                        </div>
                        <div className="text-emerald-400 text-base font-semibold  leading-normal">
                          {thbFormatter.format(item.totalprice)} บาท
                        </div>
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
}

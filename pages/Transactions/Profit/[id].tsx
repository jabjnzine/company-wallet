"use client";
import config from "@/config";
import useStore from "@/store/state";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";
import { useEffect, useState } from "react";
dayjs.extend(buddhistEra);
export default function ProfitDetail() {
  const dateFormat = "YYYY-MM-DD";
  const router = useRouter();
  const { id } = router.query;
  const type_profit = useStore((state: any) => state.type_profit);
  const date_from = useStore((state: any) => state.date_from);
  const date_to = useStore((state: any) => state.date_to);
  const type_date = useStore((state: any) => state.type_date);
  const company = useStore((state: any) => state.company);
  const [summary, setSummary] = useState<any>();
  const Formatter = new Intl.NumberFormat("th-TH", {
    style: "decimal",
    maximumFractionDigits: 2,
  });
  const fetchData = async () => {
    try {
      const url_agent = `${
        config.API_HOST
      }/dashboards/company-wallet/main-profit-agent-id?date_start=${dayjs(
        date_from
      ).format(dateFormat)}&date_end=${dayjs(date_to).format(
        dateFormat
      )}&company_id=${
        company.company_id
      }&date_type=${type_date}&agent_id=${id}`;
      const url_product = `${
        config.API_HOST
      }/dashboards/company-wallet/main-profit-product-id?date_start=${dayjs(
        date_from
      ).format(dateFormat)}&date_end=${dayjs(date_to).format(
        dateFormat
      )}&company_id=${
        company.company_id
      }&date_type=${type_date}&product_id=${id}`;
      const url = type_profit === "agent" ? url_agent : url_product;
      const response = await axios.get(url);
      setSummary(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className=" bg-gray-100 h-dvh">
      <div className="bg-white">
        <div className="text-center text-slate-800 text-xl font-semibold flex justify-center items-center mt-4">
          รายละเอียดรายรับ {type_profit}
        </div>
        <div className="p-4">
          <div className="justify-start items-center gap-2 inline-flex mb-4">
            <div className="w-1 h-5 bg-sky-500 rounded-sm" />
            <div className="text-slate-800 text-[16px] font-[600] leading-normal">
              {type_profit === `agent` ? (
                <div>ชื่อ Agent</div>
              ) : (
                <div>ชื่อ Product</div>
              )}
            </div>
          </div>
          <div className=" text-gray-900 text-base font-normal  leading-normal">
            {summary?.name}
          </div>
        </div>
      </div>
      <div className="bg-white mt-2">
        <div className="p-4">
          <div className="justify-start items-center gap-2 inline-flex mb-4">
            <div className="w-1 h-5 bg-sky-500 rounded-sm" />
            <div className="text-slate-800 text-[16px] font-[600] leading-normal">
              ข้อมูลเชิงลึก{" "}
            </div>
          </div>
          <div className="grid-cols-2 grid gap-3">
            <div>
              <div className="w-full h-[118px] p-3 bg-gray-100 rounded-2xl flex-col justify-start items-start gap-6 inline-flex">
                <div className="w-6 h-6 justify-center items-center inline-flex">
                  <div className="w-6 h-6 relative">
                    <Image
                      className="rounded-full"
                      src="/icon/book.svg"
                      alt="company"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-1 flex">
                  <div className="text-gray-500 text-sm font-normal font-['Kanit'] leading-[18px]">
                    จำนวน Booking
                  </div>
                  <div className="text-sky-700 text-base font-semibold font-['Kanit'] leading-normal">
                    {Formatter.format(summary?.total_booking)}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-full h-[118px] p-3 bg-gray-100 rounded-2xl flex-col justify-start items-start gap-6 inline-flex">
                <div className="w-6 h-6 justify-center items-center inline-flex">
                  <div className="w-6 h-6 relative">
                    <Image
                      className="rounded-full"
                      src="/icon/profile.svg"
                      alt="company"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-1 flex">
                  <div className="text-gray-500 text-sm font-normal font-['Kanit'] leading-[18px]">
                    จำนวนคน{" "}
                  </div>
                  <div className="text-sky-700 text-base font-semibold font-['Kanit'] leading-normal">
                    {Formatter.format(summary?.totalqty)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 space-y-4">
            <div className="w-full h-14 px-3 py-4 bg-gradient-to-r from-teal-500 to-teal-300 rounded-lg justify-start items-center inline-flex">
              <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                <div className="w-6 h-6 justify-center items-center flex">
                  <div className="w-6 h-6 relative">
                    <Image
                      className="rounded-full"
                      src="/icon/profit._white.svg"
                      alt="company"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <div className=" text-white text-sm font-semibold  leading-snug">
                ยอดกำไร
                </div>
              </div>
              <div className="text-right text-white text-base font-semibold leading-normal">
                {Formatter.format(summary?.totalprice)} บาท
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

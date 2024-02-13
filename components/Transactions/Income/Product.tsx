"use client";
import useStore from "@/store/state";
import Image from "next/image";
import axios from "axios";
import config from "@/config";
import { useEffect, useState } from "react";
export default function IncomeProduct() {
  const date_from = useStore((state: any) => state.date_from);
  const date_to = useStore((state: any) => state.date_to);
  const type_date = useStore((state: any) => state.type_date);
  const company = useStore((state: any) => state.company);
  const [products, setProducts] = useState<any[]>([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${config.API_HOST}/dashboards/company-wallet/main-product?date_start=${date_from}&date_end=${date_to}&company_id=${company.company_id}&date_type=${type_date}`
      );
      setProducts(response.data);
    } catch (error) {}
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
        {products && products.length === 0 ? (
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
          <div>
            {products.map((item: any, index: number) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 p-3 space-y-2"
              >
                <div className="text-black text-sm font-normal leading-snug">
                  {item.products_name}
                </div>
                <div className="w-[100%] px-1 bg-gray-50 rounded items-center gap-1 inline-flex justify-between">
                  <div className="text-black  text-sm font-normal  leading-[18px] flex gap-1 items-center">
                    <Image
                      className="w-5 h-5 rounded-full"
                      src="/icon/bank.svg"
                      alt="company"
                      width={0}
                      height={0}
                    />
                    ยอดรายรับ
                  </div>
                  <div className="text-black  text-base font-semibold leading-normal">
                    {item.total.toLocaleString("en-US")} บาท
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-center text-black  text-sm font-normal  leading-snug">
                    ยอดจ่ายแล้ว
                  </div>
                  <div className="text-center text-emerald-400 text-sm font-medium leading-tight">
                    {item.totalprice_success.toLocaleString("en-US")} บาท
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-center text-black  text-sm font-normal  leading-snug">
                    ยอดค้างจ่าย
                  </div>
                  <div className="text-center text-red-400 text-sm font-medium  leading-tight">
                    {item.totalprice_pending.toLocaleString("en-US")} บาท
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

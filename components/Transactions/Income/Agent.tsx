'use client'
import Image from "next/image";
export default function IncomeAgent() {
  return (
    <div>
      <div className="justify-start items-center gap-2 inline-flex mb-4">
        <div className="w-1 h-5 bg-sky-500 rounded-sm" />
        <div className="text-slate-800 text-[16px] font-[600]  leading-normal">
          รายการทั้งหมด
        </div>
      </div>
      <div className="space-y-2">
        <div className="rounded-lg border border-gray-200 p-3 space-y-2">
          <div className="text-black text-sm font-normal leading-snug">
            KLOOK
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
              2,504,801.00 บาท
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-center text-black  text-sm font-normal  leading-snug">
              ยอดจ่ายแล้ว
            </div>
            <div className="text-center text-emerald-400 text-sm font-medium leading-tight">
              1,804,801.00 บาท
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-center text-black  text-sm font-normal  leading-snug">
              ยอดค้างจ่าย
            </div>
            <div className="text-center text-red-400 text-sm font-medium  leading-tight">
              1,804,801.00 บาท
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 p-3 space-y-2">
          <div className="text-black text-sm font-normal leading-snug">
            KKDAY
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
              2,504,801.00 บาท
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-center text-black  text-sm font-normal  leading-snug">
              ยอดจ่ายแล้ว
            </div>
            <div className="text-center text-emerald-400 text-sm font-medium leading-tight">
              1,804,801.00 บาท
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-center text-black  text-sm font-normal  leading-snug">
              ยอดค้างจ่าย
            </div>
            <div className="text-center text-red-400 text-sm font-medium  leading-tight">
              1,804,801.00 บาท
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

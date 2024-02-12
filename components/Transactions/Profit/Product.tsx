"use client";
import Image from "next/image";
export default function ProfitProduct() {
  return (
    <div>
      <div className="justify-start items-center gap-2 inline-flex mb-4">
        <div className="w-1 h-5 bg-sky-500 rounded-sm" />
        <div className="text-slate-800 text-[16px] font-[600]  leading-normal">
          รายการทั้งหมด
        </div>
      </div>
      <div className="space-y-2">
        <div className="w-full h-[78px] bg-white rounded-lg border border-gray-200 flex-col justify-center items-center inline-flex">
          <div className="self-stretch p-3 justify-start items-center gap-3 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
              <div className="self-stretch text-black text-sm font-normal  leading-snug">
                Safari World Ticket in Bangkok
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
                    300,000.34 บาท
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

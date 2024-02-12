import Image from "next/image";
export default function IncomeDetail() {
  return (
    <div className=" bg-gray-100 h-dvh">
      <div className="bg-white">
        <div className="text-center text-slate-800 text-xl font-semibold flex justify-center items-center mt-4 ">
          รายละเอียดรายจ่าย
        </div>
        <div className="p-4">
          <div className="justify-start items-center gap-2 inline-flex mb-4">
            <div className="w-1 h-5 bg-sky-500 rounded-sm" />
            <div className="text-slate-800 text-[16px] font-[600] leading-normal">
              ชื่อ Supplier
            </div>
          </div>
          <div className=" text-gray-900 text-base font-normal  leading-normal">
            Yacht Master
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
                    195,022
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
                    195,022
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 space-y-4">
            <div className="w-full h-14 px-3 py-4 bg-gradient-to-r from-pink-600 to-red-400 rounded-lg justify-start items-center inline-flex">
              <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                <div className="w-6 h-6 justify-center items-center flex">
                  <div className="w-6 h-6 relative">
                    <Image
                      className="rounded-full"
                      src="/icon/bank_out.svg"
                      alt="company"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <div className=" text-white text-sm font-semibold  leading-snug">
                  ยอดรายจ่าย
                </div>
              </div>
              <div className="text-right text-white text-base font-semibold leading-normal">
                2,504,801.00 บาท
              </div>
            </div>
            <div className="w-full h-[74px] bg-white rounded-lg border border-gray-200 flex-col justify-center items-center inline-flex">
              <div className="self-stretch h-[74px] p-3 flex-col justify-center items-start gap-1 flex">
                <div className="self-stretch h-[22px] flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="grow shrink basis-0 text-black text-opacity-20 text-sm font-semibold font-['Kanit'] leading-snug">
                      ยอดจ่ายแล้ว
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-6 flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="px-2 py-0.5 bg-emerald-50 rounded justify-center items-center gap-3.5 flex">
                      <div className="text-center text-emerald-500 text-xs font-normal font-['Kanit'] leading-[18px]">
                        5 รายการ
                      </div>
                    </div>
                    <div className="text-center text-emerald-400 text-base font-semibold font-['Kanit'] leading-normal">
                      1,804,801.00 บาท
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[74px] bg-white rounded-lg border border-gray-200 flex-col justify-center items-center inline-flex">
              <div className="self-stretch h-[74px] p-3 flex-col justify-center items-start gap-1 flex">
                <div className="self-stretch h-[22px] flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="grow shrink basis-0 text-black text-opacity-20 text-sm font-semibold font-['Kanit'] leading-snug">
                      ยอดค้างจ่าย
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-6 flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="px-2 py-0.5 bg-red-50 rounded justify-center items-center gap-3.5 flex">
                      <div className="text-center text-red-500 text-xs font-normal font-['Kanit'] leading-[18px]">
                        3 รายการ
                      </div>
                    </div>
                    <div className="text-center text-red-400 text-base font-semibold font-['Kanit'] leading-normal">
                      700,000.00 บาท
                    </div>
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

import config from "@/config";
import useStore from "@/store/state";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra);
export default function DepositDetail() {
  const router = useRouter();
  const { id } = router.query;
  const type_deposit = useStore((state: any) => state.type_deposit);
  const company = useStore((state: any) => state.company);
  const [deposits, setDeposits] = useState<any>();
  const [lists, setLists] = useState<any[]>([]);
  const Formatter = new Intl.NumberFormat("th-TH", {
    style: "decimal",
    maximumFractionDigits: 2,
  });
  const fetchData = async () => {
    try {
      const url_supplier = `${config.API_HOST}/dashboards/company-wallet/main-supplier-deposit-id?company_id=${company.company_id}&supplier_id=${id}`;
      const url_agent = `${config.API_HOST}/dashboards/company-wallet/main-agent-deposit-id?company_id=${company.company_id}&agent_id=${id}`;
      const url = type_deposit === "agent" ? url_agent : url_supplier;
      const response = await axios.get(url);
      setDeposits(response.data);
      setLists(response.data.list);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className=" h-dvh">
      <div className="bg-white">
        <div className="text-center text-slate-800 text-xl font-semibold flex justify-center items-center mt-4 ">
          รายละเอียดมัดจำ
        </div>
        <div className="p-4">
          <div className="w-full h-[144.50px] p-3 bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg flex-col justify-center items-start inline-flex">
            <div className="self-stretch h-[120.50px] flex-col justify-center items-start gap-2 flex">
              <div className="self-stretch text-white text-xs font-light  leading-[18px]">
                บัญชี : {deposits?.name}
              </div>
              <div className="self-stretch h-[0.50px] bg-white"></div>
              <div className="self-stretch justify-start items-center inline-flex">
                <div className="grow shrink basis-0 h-[22px] justify-center items-center gap-2 flex">
                  <div className="text-white text-sm font-normal  leading-snug">
                    ยอดคงเหลือ
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-center items-center gap-2 inline-flex">
                <div className="text-white text-xl font-semibold  leading-[30px]">
                  {Formatter.format(deposits?.total)} บาท
                </div>
              </div>
              <div className="self-stretch justify-center items-center inline-flex">
                <div className="text-white text-xs font-light  leading-[18px]">
                  ข้อมูล ณ วันที่ {dayjs().locale("th").format("DD MMM BBBB")}
                </div>
              </div>
            </div>
          </div>
          <div className="justify-start items-center gap-2 inline-flex mb-4 mt-4">
            <div className="w-1 h-5 bg-sky-500 rounded-sm" />
            <div className="text-slate-800 text-[16px] font-[600] leading-normal">
              รายละเอียดมัดจำ{" "}
            </div>
          </div>
          <div className="space-y-4">
            {lists.map((item: any, index: number) => (
              <div key={index}>
                {item.type === "inbound" ? (
                  <div>
                    <div className="w-full h-[86px] bg-white rounded-lg border border-gray-200 flex-col justify-center items-center inline-flex">
                      <div className="self-stretch p-3 justify-start items-center gap-3 inline-flex">
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                          <div className="self-stretch rounded justify-start items-center gap-1 inline-flex">
                            <div className="p-1 bg-gray-50 rounded-[99px] justify-start items-start gap-2.5 flex">
                              <div className="w-6 h-6 justify-center items-center flex">
                                <div className="w-6 h-6 relative">
                                  <Image
                                    className="w-6 h-6 rounded-full"
                                    src="/icon/money_recive.svg"
                                    alt="company"
                                    width={0}
                                    height={0}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="grow shrink basis-0 text-slate-800 text-sm font-medium  leading-tight">
                              รายการฝากเงิน
                            </div>
                            <div className="justify-start items-center gap-1 flex">
                              <div className="w-4 h-4 justify-center items-center flex">
                                <div className="w-4 h-4 relative">
                                  <Image
                                    className="w-4 h-4 rounded-full"
                                    src="/icon/plus.svg"
                                    alt="company"
                                    width={0}
                                    height={0}
                                  />
                                </div>
                              </div>
                              <div className="text-emerald-400 text-base font-semibold  leading-normal">
                                {Formatter.format(item.inbound_transactions)}{" "}
                                บาท
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch justify-between items-center inline-flex">
                            <div className="text-center text-black text-opacity-20 text-sm font-normal  leading-snug">
                              วันที่ทำรายการ
                            </div>
                            <div className="text-center text-gray-400 text-sm font-normal  leading-snug">
                              {dayjs(item.create_date)
                                .locale("th")
                                .format("DD MMM BBBB")}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="w-full h-[86px] bg-white rounded-lg border border-gray-200 flex-col justify-center items-center inline-flex">
                      <div className="self-stretch p-3 justify-start items-center gap-3 inline-flex">
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                          <div className="self-stretch rounded justify-start items-center gap-1 inline-flex">
                            <div className="p-1 bg-gray-50 rounded-[99px] justify-start items-start gap-2.5 flex">
                              <div className="w-6 h-6 justify-center items-center flex">
                                <div className="w-6 h-6 relative">
                                  <Image
                                    className="w-6 h-6 rounded-full"
                                    src="/icon/money_send.svg"
                                    alt="company"
                                    width={0}
                                    height={0}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="grow shrink basis-0 text-slate-800 text-sm font-medium  leading-tight">
                              รายการใช้เงิน
                            </div>
                            <div className="justify-start items-center gap-1 flex">
                              <div className="w-4 h-4 justify-center items-center flex">
                                <div className="w-4 h-4 relative">
                                  <Image
                                    className="w-4 h-4 rounded-full"
                                    src="/icon/minus.svg"
                                    alt="company"
                                    width={0}
                                    height={0}
                                  />
                                </div>
                              </div>
                              <div className="text-red-400 text-base font-semibold  leading-normal">
                                {Formatter.format(item.outgoing_transactions)}{" "}
                                บาท{" "}
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch justify-between items-center inline-flex">
                            <div className="text-center text-black text-opacity-20 text-sm font-normal  leading-snug">
                              วันที่ทำรายการ
                            </div>
                            <div className="text-center text-gray-400 text-sm font-normal  leading-snug">
                              {dayjs(item.create_date)
                                .locale("th")
                                .format("DD MMM BBBB")}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

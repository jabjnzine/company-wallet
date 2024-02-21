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
export default function DepositSub() {
  const { push } = useRouter();
  const router = useRouter();
  const { id } = router.query;
  const company = useStore((state: any) => state.company);
  const [lists, setLists] = useState<any[]>([]);
  const Formatter = new Intl.NumberFormat("th-TH", {
    style: "decimal",
    maximumFractionDigits: 2,
  });
  const fetchData = async () => {
    try {
      const url = `${config.API_HOST}/dashboards/company-wallet/main-agent-deposit-sub?company_id=${company.company_id}&agent_id=${id}`;
      const response = await axios.get(url);
      setLists(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const selectItem = async (item: any) => {
    useStore.setState({ debtor_sub_id: item.debtor_sub_id });
    push(`/Transactions/Deposit/Sub/${id}/Details`);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className=" h-dvh">
      <div className="bg-white">
        <div className="text-center text-slate-800 text-xl font-semibold flex justify-center items-center mt-4 ">
          ลูกหนี้รายย่อย
        </div>
        <div className="p-4">
          <div className="justify-start items-center gap-2 inline-flex">
            <div className="w-1 h-5 bg-sky-500 rounded-sm" />
            <div className="text-slate-800 text-[16px] font-[600]  leading-normal">
              รายการลูกหนี้รายย่อย
            </div>
          </div>
          <div className="mt-4">
            {lists.map((item: any, index: any) => (
              <div
                onClick={() => selectItem(item)}
                key={index}
                className="w-full h-[147px] bg-white rounded-lg border border-gray-200 flex-col justify-center items-center inline-flex"
              >
                <div className="self-stretch p-3 justify-start items-center gap-3 inline-flex">
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch text-black text-sm font-normal  leading-snug">
                      {item?.name}
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
                          {Formatter.format(item?.balance)} บาท
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-px bg-gray-200"></div>
                    <div className="self-stretch justify-between items-center inline-flex">
                      <div className="text-center text-black  text-sm font-normal  leading-snug">
                        ยอดฝากทั้งหมด
                      </div>
                      <div className="text-center text-emerald-400 text-sm font-medium  leading-tight">
                        {Formatter.format(item?.inbound)} บาท
                      </div>
                    </div>
                    <div className="self-stretch justify-between items-center inline-flex">
                      <div className="text-center text-black  text-sm font-normal  leading-snug">
                        ยอดใช้ทั้งหมด
                      </div>
                      <div className="text-center text-red-400 text-sm font-medium  leading-tight">
                        {Formatter.format(item?.outbound)} บาท
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

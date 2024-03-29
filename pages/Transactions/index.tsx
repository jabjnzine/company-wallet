"use client";
import Image from "next/image";
import { useState } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { CreditCard, EqualSquare } from "lucide-react";
import Deposit from "@/components/Transactions/Deposit";
import IncomeExpense from "@/components/Transactions/IncomeExpense";
import useStore from "../../store/state";
import Head from "next/head";

export default function Transactions() {
  const company = useStore((state: any) => state.company);
  const type_deposit = useStore((state: any) => state.type_deposit);
  const type_date = useStore((state: any) => state.type_date);
  const [activeTab, setActiveTab] = useState("incomeExpense"); // Default active tab

  if (!company || !company.company_id) {
    return <div>Loading or handle the absence of company data...</div>;
  }
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  const onChangeType = (key: string) => {
    useStore.setState({ type_date: key });
  };
  const onChange = (key: string) => {
    useStore.setState({ type_deposit: key });
  };
  const items: TabsProps["items"] = [
    {
      key: "request_date",
      label: "Participants Date",
      children: (
        <IncomeExpense
          someProp="request_date"
          company_id={company.company_id}
        />
      ),
    },
    {
      key: "booking_date",
      label: "Booking Date",
      children: (
        <IncomeExpense
          someProp="booking_date"
          company_id={company.company_id}
        />
      ),
    },
  ];
  const items_: TabsProps["items"] = [
    {
      key: "supplier",
      label: "เจ้าหนี้ (Supplier)",
      children: <Deposit someProp="รายการเจ้าหนี้" />,
    },
    {
      key: "agent",
      label: "ลูกหนี้ (Agent)",
      children: <Deposit someProp="รายการลูกหนี้" />,
    },
  ];
  return (
    <div>
      <Head>
        <meta name="theme-color" content="#4285f4"></meta>
        <title>สรุปรายการบัญชี</title>
      </Head>
      <div className="bg-white w-full">
        <div className=" w-full h-[80px] bg-gradient-to-r from-[#258AD8] to-[#85B7FE]">
          <div className="text-center text-white text-xl font-semibold leading-[30px]  h-[56px] flex justify-center items-center">
            {/* สรุปรายการบัญชี */}
          </div>
        </div>
        <div className="ml-[16px] mr-[16px] w-100 h-[74px] bg-white rounded-[16px] shadow-md -mt-10 p-3">
          <div className="flex items-center gap-3">
            <div>
              <Image
                className="rounded-full"
                src={company.image}
                alt="company"
                width={44}
                height={44}
              />
            </div>
            <div>
              <div>
                <span className="text-[#667085] text-[14px] font-[400] leading-loose">
                  บริษัทของฉัน
                </span>
              </div>
              <div className="text-[#1B3045] text-[16px] font-[400]  leading-normal">
                {company.label}{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[24px] ml-[16px] mr-[16px] ">
          {activeTab === `incomeExpense` && (
            <Tabs
              defaultActiveKey={type_date}
              items={items}
              onChange={onChangeType}
              centered
            />
          )}
          {activeTab === `deposit` && (
            <Tabs
              defaultActiveKey={type_deposit}
              items={items_}
              onChange={onChange}
              centered
            />
          )}
        </div>
        <div className="grid grid-cols-2 fixed bottom-0 w-full  bg-white shadow-[#b6b6b6] shadow-lg p-4">
          <div className="flex flex-col items-center">
            <button
              className={`mx-2 flex flex-col items-center ${
                activeTab === "incomeExpense" ? "active text-[#0086C9]" : ""
              }`}
              onClick={() => handleTabClick("incomeExpense")}
            >
              {" "}
              <CreditCard />
              <span className="btm-nav-label">ยอดรายรับ-รายจ่าย</span>
            </button>
          </div>
          <div className="flex flex-col items-center">
            <button
              className={`mx-2 flex flex-col items-center ${
                activeTab === "deposit" ? "active text-[#0086C9]" : ""
              }`}
              onClick={() => handleTabClick("deposit")}
            >
              {" "}
              <EqualSquare />
              <span className="btm-nav-label">ยอดมัดจำ</span>
            </button>
          </div>
        </div>
        {/* <div className="flex justify-between items-center fixed bottom-0 w-full bg-red-400">
          <div className="bg-black w-full">
            <button
              className={`mx-2 flex flex-col items-center ${
                activeTab === "incomeExpense" ? "active text-[#0086C9]" : ""
              }`}
              onClick={() => handleTabClick("incomeExpense")}
            >
              {" "}
              <CreditCard />
              <span className="btm-nav-label">ยอดรายรับ-รายจ่าย</span>
            </button>
          </div>
          <div>
            <button
              className={`mx-2 flex flex-col items-center ${
                activeTab === "deposit" ? "active text-[#0086C9]" : ""
              }`}
              onClick={() => handleTabClick("deposit")}
            >
              {" "}
              <EqualSquare />
              <span className="btm-nav-label">ยอดมัดจำ</span>
            </button>
          </div>
        </div> */}
        {/* <div className="w-full h-[98px] px-6 pt-3 bg-white shadow flex-col justify-start items-center inline-flex fixed bottom-0">
          <div className="self-stretch justify-center items-end inline-flex">
            <div className="w-full p-1 rounded-sm flex-col justify-center items-center inline-flex">
              <div className="w-6 h-6 justify-center items-center inline-flex">
                <div className="w-6 h-6 relative"></div>
              </div>
              <div className="text-center text-black text-xs font-medium font-['Kanit'] leading-tight">
                ยอดรายรับ-รายจ่าย
              </div>
            </div>
            <div className="w-full p-1 rounded-sm flex-col justify-center items-center inline-flex">
              <div className="w-6 h-6 justify-center items-center inline-flex">
                <div className="w-6 h-6 relative"></div>
              </div>
              <div className="text-center text-black text-opacity-20 text-xs font-medium font-['Kanit'] leading-tight">
                ยอดมัดจำ
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

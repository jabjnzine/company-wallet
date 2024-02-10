'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import useStore from "../../store/state";
import { useRouter } from "next/navigation";

export default function Company() {
  const [profile, setProfile] = useState<any>({});
  const items_ = [
    {
      key: "ttd",
      company_id: 1,
      label: "บริษัท ทีทีดี โกลเบิล จำกัด",
      image:
        "https://media.discordapp.net/attachments/1092025590028193842/1105763737316642827/uxui1.png?ex=65cc70bb&is=65b9fbbb&hm=ea7c3a5445b9926af0028f4a5fb0506d658a41777c93c5eaf987e6b0e332d79c&=&format=webp&quality=lossless&width=671&height=671",
    },
    {
      key: "oas",
      company_id: 2,
      label: "บริษัท วัน เอเซีย คอร์ปอร์เรชั่น จำกัด",
      image:
        "https://media.discordapp.net/attachments/1092025590028193842/1105763410295128074/One_Asia_Logo_orangea.png?ex=65cc706d&is=65b9fb6d&hm=4184a32082f5cb4e0df844e436a32c202fcff31facc7a5aa20b5a82869377db0&=&format=webp&quality=lossless&width=644&height=671",
    },
  ];
  const { push } = useRouter();
  const selectCompany = (company: any) => {
    useStore.setState({ company: company });
    push("/Transactions");
  };
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const liff = (await import("@line/liff")).default;
        await liff.ready;
        const userProfile = await liff.getProfile();
        setProfile(userProfile);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile();
  }, [profile.userId]);
  return (
    <div className="bg-gradient-to-r from-[#258AD8] to-[#85B7FE]">
      <div className="w-[100%] justify-center items-center inline-flex mt-6 mb-6">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex ml-6">
          <div>
            <span className="text-white text-2xl font-semibold font-['Kanit'] leading-loose">
              สวัสดีคุณ {profile.displayName}
            </span>
            <span className="text-sky-900 text-2xl font-bold font-['Roboto'] leading-loose">
              {" "}
              👋
            </span>
          </div>
          <div className="text-white text-base font-normal font-['Kanit'] leading-normal">
            ยินดีต้อนรับ, เลือกบริษัทที่คุณต้องการ
          </div>
        </div>
        <Image
          className="rounded-full mr-6"
          src={profile.pictureUrl}
          alt={profile.displayName}
          id="logo"
          width={60}
          height={60}
        />{" "}
      </div>
      <div className="w-full bg-white rounded-t-[24px] pl-6 pr-6 pt-8 space-y-4">
        <div className="text">
          <div className="justify-start items-center gap-2 inline-flex">
            <div className="w-1 h-5 bg-sky-500 rounded-sm" />
            <div className="text-slate-800 text-base font-semibold font-['Kanit'] leading-normal">
              บริษัทของฉัน
            </div>
          </div>
        </div>
        <div className="company space-y-4">
          {items_.map((item, index) => (
            <div key={index}>
              <div
                className="w-full h-16 p-4 bg-white rounded-2xl border border-gray-200 justify-start items-center gap-4 inline-flex"
                onClick={() => selectCompany(item)}
              >
                <Image
                  className="rounded-full"
                  src={item.image}
                  alt={`${item.label}`}
                  width={32}
                  height={32}
                />
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <div className="text-slate-800 text-base font-normal font-['Kanit'] leading-normal">
                    {item.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

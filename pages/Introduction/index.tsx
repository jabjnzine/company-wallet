'use client'
import Image from "next/image";
export default function Introduction() {
  return (
    <div className="inline-flex flex-col items-center gap-[32px] absolute left-[24px] right-[24px] h-dvh overflow-hidden">
      <div className="mt-[80px]">
        <Image
          src="/introduction.svg"
          alt="introduction"
          width={233}
          height={233}
        />
      </div>
      <div className="font-[600] text-[#016aa2] text-[24px] leading-[32px]">
        สรุปภาพรวมการเงินของบริษัท
        <div className="font-[400] text-[#0f1728] text-[14px] text-center tracking-[0] leading-[22px] mt-[8px] ">
          Company Wallet จะทำให้คุณติดตาม
          <br />
          รายรับรายจ่าย และการเงินของบริษัทได้อย่างรวดเร็ว
        </div>
      </div>
      <div style={{ marginTop: "auto", marginBottom: "32px" }}>
        <button className="btn bg-[#026AA2] w-[327px]  h-[48px] rounded-[8px] p-[12px] text-white">
          เริ่มต้นใช้งาน
          <Image alt="line" src="/icon/next.svg" width={20} height={20} />
        </button>
      </div>
    </div>
  );
}

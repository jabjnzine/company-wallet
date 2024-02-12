import Image from "next/image";
export default function DesktopDevice() {
  return (
    <div>
      <div className="bg-white flex flex-col justify-center  items-center  w-full h-dvh">
        <div>
          <Image
            src="/logo.png"
            alt="logo"
            id="logo"
            width={200}
            height={200}
          />{" "}
        </div>
        <div>ขออภัย กรุณาเปิดใน LINE ของมือถือน้าา~</div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full min-h-[70px] bg-white border-b border-b-sky-400 relative flex items-center justify-between p-[20px] py-2 rounded-t-xl">
      <Image src="https://i.imgur.com/FulSPzu.png" width={72} height={72} className="w-[72px] h-[72px]" alt="logo" />
      <Image src="https://i.imgur.com/oOjiZMg.jpeg" width={250} height={72} className="" alt="logo" />
    </div>
  );
}

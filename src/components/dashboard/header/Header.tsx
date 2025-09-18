'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { RiLogoutCircleLine } from 'react-icons/ri';

export default function Header({ handleLogout, user }: any) {
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full min-h-[30px] relative flex items-center justify-between bg-white border-b-4 border-b-[#056dae] px-[16px]">
      <Image src="https://i.imgur.com/FulSPzu.png" width={72} height={72} className="w-[72px] h-[72px]" alt="logo" />

      <div className="relative">
        {user.holder.profileImgUrl ? (
          <Image src={user.holder.profileImgUrl} width={40} height={40} className="w-[50px] h-[50px] rounded-full" alt="logo" onClick={toggleNav} />
        ) : (
          <RiLogoutCircleLine className="text-2xl text-[#056dae]" onClick={toggleNav} />
        )}

        {open && (
          <div className="absolute mt-1 z-50 shadow bg-white border py-2 rounded-md right-0 flex flex-col justify-center gap-[5px]">
            <p className="text-[14px] px-[15px] py-[5px] whitespace-nowrap font-medium text-[#056dae]">
              {user.holder.fullName}&nbsp;{user.holder.lastName}
            </p>
            <p className="text-[14px] m-1 px-[15px] text-center rounded-md py-[5px] bg-[#056dae] border whitespace-nowrap text-white" onClick={handleLogout}>
              Sign out
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

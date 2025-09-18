'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { mockAccounts } from '../mockData/MockData';
import Header from '../header/Header';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAccount = mockAccounts.find(account => account.holder.username === username);
    if (!userAccount) {
      setError('User not found');
      return;
    }
    if (userAccount.holder.password !== password) {
      setError('Invalid password');
      return;
    }
    // Store user data in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(userAccount));
    router.push('/dashboard');
  };

  return (
    <div className="h-screen relative">
      <Header />
      <div className="bg-[white] p-4 mt-10">
        <div className="text-center">
          <p className='text-[#002a54] text-2xl'>Welcome</p>
          <p className='text-gray-500'>Log in to view your accounts</p>
        </div>

        <div className="mt-3">{error && <p className="text-[20px] text-center mx-auto max-w-[200px] rounded-md flex items-center justify-center text-red-600">{error}</p>}</div>

        <div className="bg-white mx-auto rounded-xl px-2 py-7">
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="Username" className="text-[#333333] text-[16px]">
                  User ID
                </label>
                <input type="text" value={username} placeholder="User ID" className="p-4 py-3 rounded-lg text-[#333333] bg-transparent border border-gray-300 outline-none" onChange={e => setUsername(e.target.value)} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-[#333333] text-[16px]">
                  Password
                </label>
                <input type="password" value={password} placeholder="Password" className="p-4 py-3 rounded-lg text-[#333333] bg-transparent border border-gray-300 outline-none" onChange={e => setPassword(e.target.value)} />
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-2 mt-6">
              <button type="submit" className="p-4 py-3 bg-[#056dae] w-full text-white font-semibold rounded-lg">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full min-h-[70px] flex items-center justify-center absolute bottom-0 z-50 px-[10px] p-[20px]">
        <p className="text-sm text-[#22262A] text-center">© 2025 Citigroup Inc. Member FDIC. All rights reserved.</p>
      </div>
    </div>
  );
}

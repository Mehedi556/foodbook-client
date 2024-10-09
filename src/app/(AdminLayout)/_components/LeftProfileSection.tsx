"use client"
import { useUser } from '@/src/context/user.provider';
import { useToken } from '@/src/utils/useToken';
import React from 'react'

const LeftProfileSection = () => {
    const { user } = useUser()
  return (
    <div className='mt-10'>
        <div className='flex justify-center'>
          <img src='https://i.ibb.co.com/7R1b3zK/logo-2.png' alt='profile picture' className='h-24 w-24 border-5 p-1 border-[#bf39ad] rounded-full '/>
          <img src={user?.profilePicture} alt='profile picture' className='border-5 border-[#bf39ad] rounded-full h-24 w-24 ml-[-20px]'/>
        </div>
        <p className='text-center text-lg font-bold text-white mt-2'>{user?.name}</p>
        <p className='text-center'>{user?.email}</p>
      </div>
  )
}

export default LeftProfileSection
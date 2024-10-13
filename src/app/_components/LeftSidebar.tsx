"use client"
import { ChefHat, Gem, House, ShieldCheck, UserRoundPen, UsersRound } from 'lucide-react'
import React from 'react'
import LogoutButton from './LogoutButton'
import Link from 'next/link'
import { useToken } from '@/src/utils/useToken'
import LeftProfileSection from './LeftProfileSection'
import { useUser } from '@/src/context/user.provider'

const LeftSidebar = () => {

  // const decodedUser = await useToken()
  const { user } = useUser()

  return (
    <div className='w-full'>
      <LeftProfileSection />
      <div className='mt-10 px-5 flex flex-col gap-y-3'>
        <Link href={`/${user?.role}`} className='flex gap-x-3 text-sm lg:text-lg py-4 rounded-xl items-center text-white w-full bg-[#884D80]'>
          <House className='ml-4 xl:ml-20' />
          <p>Feed</p>
        </Link>
        <Link href={`/${user?.role}/my-recipes`} className='flex gap-x-3 text-sm lg:text-lg py-4 rounded-xl items-center text-white w-full bg-[#884D80]'>
          <ChefHat className='ml-4 xl:ml-20' />
          <p>My recipes</p>
        </Link>
        <Link href={`/${user?.role}/my-profile`} className='flex gap-x-3 text-sm lg:text-lg py-4 rounded-xl items-center text-white w-full bg-[#884D80]'>
          <UserRoundPen className='ml-4 xl:ml-20' />
          <p>My profile</p>
        </Link>

        {
          user?.role == 'admin' && (
            <Link href='/admin/manage-users' className='flex gap-x-3 text-sm lg:text-lg py-4 rounded-xl items-center text-white w-full bg-[#884D80]'>
              <UsersRound className='ml-4 xl:ml-20' />
              <p>Manage all users</p>
            </Link>
          )
        }

        {
          user?.role == 'admin' && (
            <Link href='/admin/admin-management' className='flex gap-x-3 text-sm lg:text-lg py-4 rounded-xl items-center text-white w-full bg-[#884D80]'>
              <ShieldCheck className='ml-4 xl:ml-20' />
              <p>Admin management</p>
            </Link>
          )
        }

        {
          user?.role == 'user' && (
            <Link href='/user/subscription' className='flex gap-x-3 text-sm lg:text-lg py-4 rounded-xl items-center text-white w-full bg-[#884D80]'>
              <Gem className='ml-4 xl:ml-20' />
              <p>Subscription</p>
            </Link>
          )
        }


        <LogoutButton />
      </div>
    </div>
  )
}

export default LeftSidebar
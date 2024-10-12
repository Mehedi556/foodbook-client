import { ChefHat, Gem, House, ShieldCheck, UserRoundPen, UsersRound } from 'lucide-react'
import React from 'react'
import LogoutButton from './LogoutButton'
import Link from 'next/link'
import { useToken } from '@/src/utils/useToken'
import LeftProfileSection from './LeftProfileSection'

const LeftSidebar = async () => {

  const decodedUser = await useToken()

  return (
    <div className='w-full'>
      <LeftProfileSection />
      <div className='mt-10 px-5 flex flex-col gap-y-3'>
        <Link href={`/${decodedUser?.role}`} className='flex gap-x-3 text-sm lg:text-lg py-4 rounded-xl items-center text-white w-full bg-[#884D80]'>
          <House className='ml-4 xl:ml-20' />
          <p>Feed</p>
        </Link>
        <Link href={`/${decodedUser?.role}/my-recipes`} className='flex gap-x-3 text-sm lg:text-lg py-4 rounded-xl items-center text-white w-full bg-[#884D80]'>
          <ChefHat className='ml-4 xl:ml-20' />
          <p>My recipes</p>
        </Link>
        <Link href={`/${decodedUser?.role}/my-profile`} className='flex gap-x-3 text-sm lg:text-lg py-4 rounded-xl items-center text-white w-full bg-[#884D80]'>
          <UserRoundPen className='ml-4 xl:ml-20' />
          <p>My profile</p>
        </Link>

        {
          decodedUser?.role == 'admin' && (
            <Link href='/admin/manage-users' className='flex gap-x-3 text-sm lg:text-lg py-4 rounded-xl items-center text-white w-full bg-[#884D80]'>
              <UsersRound className='ml-4 xl:ml-20' />
              <p>Manage all users</p>
            </Link>
          )
        }

        {
          decodedUser?.role == 'admin' && (
            <Link href='/admin/admin-management' className='flex gap-x-3 text-sm lg:text-lg py-4 rounded-xl items-center text-white w-full bg-[#884D80]'>
              <ShieldCheck className='ml-4 xl:ml-20' />
              <p>Admin management</p>
            </Link>
          )
        }

        {
          decodedUser?.role == 'user' && (
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
import { Button } from '@nextui-org/button'
import { Image } from '@nextui-org/image'
// import { Link } from '@nextui-org/link'
import { ChefHat, House, LogOut, ShieldCheck, UserRoundPen, UsersRound } from 'lucide-react'
import React from 'react'
import LogoutButton from './LogoutButton'
import Link from 'next/link'

const LeftSidebar = () => {
  return (
    <div className='w-full'>
      <div className='mt-10'>
        <div className='flex justify-center'>
          <img src='https://i.ibb.co.com/7R1b3zK/logo-2.png' alt='profile picture' className='h-24 w-24 border-5 p-1 border-[#bf39ad] rounded-full '/>
          <img src='https://i.ibb.co.com/1nB0GvW/db1f9a3eaca4758faae5f83947fa807c.jpg' alt='profile picture' className='border-5 border-[#bf39ad] rounded-full h-24 w-24 ml-[-20px]'/>
        </div>
        <p className='text-center text-lg font-bold text-white mt-2'>Bogdan Nikitin</p>
        <p className='text-center'>@nikitinteam</p>
      </div>

      <div className='mt-10 px-5 flex flex-col gap-y-3'>
        <Link href='/admin' className='flex gap-x-3 text-lg py-4 rounded-xl items-center text-white w-full bg-[#884D80]'>
          <House className='ml-20'/>
          <p>Feed</p>
        </Link>
        <Link href='/admin/my-recipes' className='flex gap-x-3 text-lg py-4 rounded-xl items-center text-white w-full bg-[#884D80]'>
          <ChefHat className='ml-20'/>
          <p>My recipes</p>
        </Link>
        <Link href='#' className='flex gap-x-3 text-lg py-4 rounded-xl items-center text-white w-full bg-[#884D80]'>
          <UserRoundPen className='ml-20'/>
          <p>My profile</p>
        </Link>
        <Link href='#' className='flex gap-x-3 text-lg py-4 rounded-xl items-center text-white w-full bg-[#884D80]'>
          <UsersRound className='ml-20'/>
          <p>All users</p>
        </Link>
        <Link href='#' className='flex gap-x-3 text-lg py-4 rounded-xl items-center text-white w-full bg-[#884D80]'>
          <ShieldCheck className='ml-20'/>
          <p>Admin management</p>
        </Link>
        <LogoutButton />
      </div>
    </div>
  )
}

export default LeftSidebar
"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/src/assets/logo.png'
import { Button } from '@nextui-org/button'
// import { resetPassword } from '@/src/services/AuthService'
import { useSearchParams } from 'next/navigation'
import { useResetPassword } from '@/src/hooks/auth.hook'
import Link from 'next/link'

const ResetPasswordPage = () => {
    const [text, setText] = useState('')

const searchParams = useSearchParams();
  const token = searchParams.get('token')
  const id = searchParams.get('id')
  console.log(token);

  const { mutate:resetPassword } = useResetPassword()

    const handleResetPassword = () => {
        const resetPasswordData = {
            body: {
                _id: id!,
                password: text
            },
            token: token!
        };
        resetPassword(resetPasswordData);
        setText('')
    }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient">
        <div className='flex flex-col sm:flex-row items-center bg-white rounded-lg max-w-xl'>
          <Image alt='logo' src={logo} className='h-[200px] w-[200px]' />
          <div className="p-4 sm:p-8 m-3 sm:m-0 rounded-lg shadow-lg ">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Reset password</h2>

              <input onChange={(e) => setText(e.target.value)} value={text} type="password" required
                className="peer w-full px-4 py-3 text-gray-900  bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none focus:border-[#884D80] transition duration-300 mb-2" placeholder="Type new password..." />

              <Button onClick={handleResetPassword} 
              disabled={!text}
              type="submit"
                className="w-full px-4 py-3 font-semibold text-white bg-[#884D80]  hover:bg-gradient rounded-lg  transition ease-in-out duration-300">Reset Password</Button>

          </div>
        </div>
        <Link href='/login' className='mt-5 text-white py-2 bg-solid rounded-lg px-2'>Go back to login page</Link>
      </div>
  )
}

export default ResetPasswordPage
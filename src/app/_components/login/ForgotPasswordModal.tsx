"use client"
import React, { useState } from 'react'
import logo from '@/src/assets/logo.png'
import ReusableModal from '../RecipeCardWithComponents/ReusableModal'
import { forgetPassword } from '@/src/services/AuthService'
import { toast } from 'sonner'
import Image from 'next/image'

const ForgotPasswordModal = () => {
    const [text, setText] = useState('')

    const handleSendEmail = () => {
        forgetPassword({email: text})
        toast.success('Check your email please..')
    }
  return (
    <ReusableModal size='lg' buttonText='Click here' title='Type your email for change password'>
      <div className='w-full flex flex-col gap-y-3 max-h-[300px]'>

        <div className='flex flex-col gap-x-2 justify-center items-center'>
            <Image alt='' width={100} height={100} className='rounded-full' src={logo as any} />
            <input onChange={(e) => setText(e.target.value)} value={text} className='py-3 w-full text-sm placeholder:text-sm placeholder:pl-3  text-gray-900  bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none focus:border-colorSecondary transition duration-300 pl-2' placeholder="Type your email.." type="text" name="" id="" />
            
        </div>
        <button disabled={!text} onClick={handleSendEmail} className='mr-1 bg-colorSecondary font-semibold py-2 px-3 rounded-lg'>Send</button>

      </div>
    </ReusableModal>
  )
}

export default ForgotPasswordModal
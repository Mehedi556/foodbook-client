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
            <input onChange={(e) => setText(e.target.value)} value={text} className='py-3 w-full rounded-xl text-sm placeholder:text-sm placeholder:pl-3 bg-solid focus:outline-none pl-2' placeholder="Type your email.." type="text" name="" id="" />
            
        </div>
        <button disabled={!text} onClick={handleSendEmail} className='mr-1 bg-solid text-white py-2 px-3 rounded-xl'>Send</button>

      </div>
    </ReusableModal>
  )
}

export default ForgotPasswordModal
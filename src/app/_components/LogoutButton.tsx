"use client"
import { useUser } from '@/src/context/user.provider'
import { logout } from '@/src/services/AuthService'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const LogoutButton = () => {
    const router = useRouter();
    const { setIsLoading } = useUser()
    const handleLogout = () => {
        logout();
        setIsLoading(true)
        router.push('/')
    }
    return (
            <button onClick={() => handleLogout()} className='flex gap-x-3 text-sm lg:text-lg py-4 rounded-xl items-center text-colorPrimary w-full bg-colorSecondary hover:text-red-500'>
                <LogOut className='ml-4 xl:ml-20' />
                <p>Sign out</p>
            </button>
    )
}

export default LogoutButton
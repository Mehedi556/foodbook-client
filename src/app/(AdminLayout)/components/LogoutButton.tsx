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
            <button onClick={() => handleLogout()} className='flex gap-x-3 text-lg py-4 rounded-xl items-center text-white w-full bg-solid hover:text-red-500'>
                <LogOut className='ml-20' />
                <p>Sign out</p>
            </button>
    )
}

export default LogoutButton
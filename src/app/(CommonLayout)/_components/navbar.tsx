"use client"
import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import Image from 'next/image';
import logo from '@/src/assets/logo.png'
import { useUser } from '@/src/context/user.provider';
import Link from 'next/link';
import { logout } from '@/src/services/AuthService';
import { ChartNoAxesCombined, Headset, House, LogIn, LogOut, UserCheck } from 'lucide-react';
import LeftProfileSection from '../../_components/LeftProfileSection';

const NavbarComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const { user } = useUser();



    const handleLogout = () => {
        logout();
    }

    const handleMenuItemClick = () => {
        setIsMenuOpen(false);
    };
    return (
        <div className='min-w-full bg-colorSecondary'>
            <div className='w-full'>
                <Navbar maxWidth='xl' position='sticky'  isMenuOpen={isMenuOpen} 
    onMenuOpenChange={setIsMenuOpen} className='bg-colorSecondary'>
                    <NavbarContent>
                        <NavbarBrand>
                            <Link href={`/`} className='flex items-center gap-x-2'>
                                <Image src={logo} alt='' height={45} width={45} />
                                <p className="font-semibold text-colorSolid text-2xl">foodbook</p>
                            </Link>
                        </NavbarBrand>
                    </NavbarContent>

                    <NavbarContent className="hidden sm:flex gap-6" justify="center">
                        <NavbarItem>
                            <Link className='text-colorSolid font-semibold' href="/">
                                Home
                            </Link>
                        </NavbarItem>
                        <NavbarItem >
                            <Link href="/about" className='text-colorSolid font-semibold'>
                                About us
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link className='text-colorSolid font-semibold' href="/contact">
                                Contact us
                            </Link>
                        </NavbarItem>
                        {
                            user?._id && (
                                <NavbarItem>
                                    <Link className='text-colorSolid font-semibold' href={`/${user?.role}`}>
                                        Dashboard
                                    </Link>
                                </NavbarItem>
                            )
                        }
                    </NavbarContent>

                    <NavbarContent justify="end">
                        {
                            user?.email ? (
                                <div className="hidden md:flex gap-x-1 ">
                                    <NavbarItem className="">
                                        <Link onClick={() => handleLogout()} href='/' className=" flex items-center text-colorSolid gap-x-2 font-semibold"><LogOut className='mt-0.5 text-colorPrimary' /><span className=''>Log out</span></Link>
                                    </NavbarItem>
                                </div>
                            )
                                :
                                (
                                    <div className="hidden md:flex gap-x-1 ">
                                        <NavbarItem className="">
                                            <Link href='/login' className="text-inherit py-0.5 font-semibold">Log in</Link>
                                        </NavbarItem>
                                        <button disabled className="text-xs ">-or-</button>
                                        <NavbarItem className="">
                                            <Link href='/signup' className="text-inherit border border-colorPrimary rounded-sm px-2 py-1 font-semibold">Sign up</Link>
                                        </NavbarItem>
                                    </div>
                                )
                        }

                        <NavbarMenuToggle
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            className="sm:hidden"
                        />
                    </NavbarContent>

                    <NavbarMenu>
                        <div className='w-full'>

                            <div className='mt-10'>
                                <div className='flex justify-center'>
                                    <img src='https://i.ibb.co.com/7R1b3zK/logo-2.png' alt='profile picture' className='h-24 w-24 border-5 p-1 border-colorPrimary rounded-full ' />
                                    {
                                        user?.email && (
                                            <img src={user?.profilePicture || 'https://i.ibb.co.com/mh2BTZG/user-png-33842.png'} alt='profile picture' className='border-5 border-colorPrimary rounded-full h-24 w-24 ml-[-20px]' />
                                        )
                                    }

                                </div>
                                <p className='text-center text-lg font-bold text-white mt-2'>{user?.name}</p>
                                <p className='text-center'>{user?.email}</p>
                            </div>


                            <div className='mt-10 px-5 flex flex-col gap-y-3'>
                                <Link onClick={handleMenuItemClick} href='/' className='flex gap-x-3 text-sm lg:text-lg py-4 rounded-xl items-center text-colorSolid w-full bg-colorSecondary'>
                                    <House className='ml-4 xl:ml-20' />
                                    <p>Home</p>
                                </Link>
                                <Link onClick={handleMenuItemClick} href='/about' className='flex gap-x-3 text-sm lg:text-lg py-4 rounded-xl items-center text-colorSolid w-full bg-colorSecondary'>
                                    <UserCheck className='ml-4 xl:ml-20' />
                                    <p>About us</p>
                                </Link>
                                <Link onClick={handleMenuItemClick} href='/admin/my-profile' className='flex gap-x-3 text-sm lg:text-lg py-4 rounded-xl items-center text-colorSolid w-full bg-colorSecondary'>
                                    <Headset className='ml-4 xl:ml-20' />
                                    <p>Contact us</p>
                                </Link>

                                {
                                    user?.email && (
                                        <Link onClick={handleMenuItemClick} href={`/${user?.role}`} className='flex gap-x-3 text-sm lg:text-lg py-4 rounded-xl items-center text-colorSolid w-full bg-colorSecondary'>
                                            <ChartNoAxesCombined className='ml-4 xl:ml-20' />
                                            <p>Dashboard</p>
                                        </Link>
                                    )
                                }

                                {
                                    user?.email ? (
                                        <Link onClick={() => {
                                    handleLogout()
                                    handleMenuItemClick();
                                } } href='/' className='flex gap-x-3 text-sm lg:text-lg py-4 rounded-xl items-center text-colorSolid w-full bg-colorSecondary'>
                                    <LogOut className='ml-4 xl:ml-20 text-colorPrimary' />
                                    <p>Log out</p>
                                </Link>
                                    )
                                    :
                                    (
                                        <Link onClick={() => {
                                    handleLogout()
                                    handleMenuItemClick();
                                } } href='/login' className='flex gap-x-3 text-sm lg:text-lg py-4 rounded-xl items-center text-colorSolid w-full bg-colorSecondary'>
                                    <LogIn className='ml-4 xl:ml-20' />
                                    <p>Log in / Sign up</p>
                                </Link>
                                    )
                                }
                                

                                
                            </div>
                        </div>
                    </NavbarMenu>
                </Navbar>
            </div>
        </div>
    )
}

export default NavbarComponent
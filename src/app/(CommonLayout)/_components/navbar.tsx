"use client"
import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { Link } from '@nextui-org/link';
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import logo from '@/src/assets/logo.png'

const NavbarComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "Log Out",
    ];
    return (
        <div className='min-w-full bg-[#884D80]'>
            <div className='w-full'>
                <Navbar maxWidth='xl' position='sticky' onMenuOpenChange={setIsMenuOpen} className='bg-[#884D80]'>
                    <NavbarContent>
                        <NavbarMenuToggle
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            className="sm:hidden"
                        />
                        <NavbarBrand className='flex items-center gap-x-2'>
                            <Image src={logo} alt='' height={45} width={45} />
                            <p className="font-semibold text-inherit text-2xl">foodbook</p>
                        </NavbarBrand>
                    </NavbarContent>

                    <NavbarContent className="hidden sm:flex gap-6" justify="center">
                        <NavbarItem isActive>
                            <Link className='text-inherit' href="/">
                                Home
                            </Link>
                        </NavbarItem>
                        <NavbarItem >
                            <Link href="/about" className='text-inherit'>
                                About us
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link className='text-inherit' href="/contact">
                                Contact us
                            </Link>
                        </NavbarItem>
                    </NavbarContent>

                    <NavbarContent justify="end">
                        <div className="hidden md:flex gap-x-1 ">
                            <NavbarItem className="">
                                <Link href='/login' className="text-inherit py-0.5">Log in</Link>
                            </NavbarItem>
                            <button disabled className="text-xs text-gray-400">-or-</button>
                            <NavbarItem  className="">
                                <Link href='/signup' className="text-inherit border rounded-sm px-2 py-0.5">Sign up</Link>
                            </NavbarItem>
                        </div>
                    </NavbarContent>

                    <NavbarMenu>
                        {menuItems.map((item, index) => (
                            <NavbarMenuItem key={`${item}-${index}`}>
                                <Link
                                    color={
                                        index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                    }
                                    className="w-full"
                                    href="#"
                                    size="lg"
                                >
                                    {item}
                                </Link>
                            </NavbarMenuItem>
                        ))}
                    </NavbarMenu>
                </Navbar>
            </div>
        </div>
    )
}

export default NavbarComponent
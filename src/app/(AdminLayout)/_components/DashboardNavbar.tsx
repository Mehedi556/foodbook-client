"use client"

import { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import Link from "next/link";
import LeftProfileSection from "./LeftProfileSection";
import { ChefHat, House, ShieldCheck, UserRoundPen, UsersRound } from "lucide-react";
import LogoutButton from "./LogoutButton";


const DashboardNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuItemClick = () => {
        setIsMenuOpen(false);
    };

  return (
    <Navbar isMenuOpen={isMenuOpen} 
    onMenuOpenChange={setIsMenuOpen}  className="bg-solid border-b border-slate-600 sticky top-0">
      <NavbarContent className="">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

      </NavbarContent>

  
      <NavbarMenu  onChange={(open:any) => setIsMenuOpen(open)}>
      <div className='w-full'>
      <LeftProfileSection />
      <div className='mt-10 px-5 flex flex-col gap-y-3'>
        <Link onClick={handleMenuItemClick} href='/admin' className='flex gap-x-3 text-sm lg:text-lg py-4 rounded-xl items-center text-white w-full bg-[#884D80]'>
          <House className='ml-4 xl:ml-20'/>
          <p>Feed</p>
        </Link>
        <Link onClick={handleMenuItemClick} href='/admin/my-recipes' className='flex gap-x-3 text-sm lg:text-lg py-4 rounded-xl items-center text-white w-full bg-[#884D80]'>
          <ChefHat className='ml-4 xl:ml-20'/>
          <p>My recipes</p>
        </Link>
        <Link onClick={handleMenuItemClick} href='/admin/my-profile' className='flex gap-x-3 text-sm lg:text-lg py-4 rounded-xl items-center text-white w-full bg-[#884D80]'>
          <UserRoundPen className='ml-4 xl:ml-20'/>
          <p>My profile</p>
        </Link>
        <Link onClick={handleMenuItemClick} href='/admin/manage-users' className='flex gap-x-3 text-sm lg:text-lg py-4 rounded-xl items-center text-white w-full bg-[#884D80]'>
          <UsersRound className='ml-4 xl:ml-20'/>
          <p>Manage all users</p>
        </Link>
        <Link onClick={handleMenuItemClick} href='/admin/admin-management' className='flex gap-x-3 text-sm lg:text-lg py-4 rounded-xl items-center text-white w-full bg-[#884D80]'>
          <ShieldCheck className='ml-4 xl:ml-20'/>
          <p>Admin management</p>
        </Link>
        <LogoutButton />
      </div>
    </div>
      </NavbarMenu>
    </Navbar>
  )
}

export default DashboardNavbar
import React from 'react'
import LeftSidebar from '../../_components/LeftSidebar'
import RightSidebar from '../../_components/RightSidebar'
import DashboardNavbar from '../_components/DashboardNavbar';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grid grid-cols-12 bg-gradient min-h-screen'>
      <div className='hidden sm:block sm:col-span-4 xl:col-span-3 border-r-1 border-[#884D80] sticky top-0 h-screen'>
        <LeftSidebar />
      </div>
      <div className='col-span-12 sm:col-span-8 xl:col-span-6 border-r-1 border-[#884D80]'>
        <div className='block sm:hidden sticky top-0 z-50'>
          <DashboardNavbar />
        </div>
        {children}
      </div>
      <div className='col-span-3 sticky top-0 h-screen hidden xl:block'>
        <RightSidebar />
      </div>
    </div>
  )
}

export default AdminLayout
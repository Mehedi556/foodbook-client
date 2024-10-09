import React from 'react'
import LeftSidebar from '../_components/LeftSidebar'
import RightSidebar from '../_components/RightSidebar'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grid grid-cols-12 bg-gradient min-h-screen'>
      <div className='col-span-3 border-r-1 border-[#884D80] sticky top-0 h-screen'>
        <LeftSidebar />
      </div>
      <div className='col-span-6 border-r-1 border-[#884D80]'>
        {children}
      </div>
      <div className='col-span-3 sticky top-0 h-screen'>
        <RightSidebar />
      </div>
    </div>
  )
}

export default AdminLayout
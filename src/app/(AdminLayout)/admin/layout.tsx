import React from 'react'

const AdminLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <p>admin navbar</p>
        {children}
        <p>admin footer</p>
        </div>
  )
}

export default AdminLayout
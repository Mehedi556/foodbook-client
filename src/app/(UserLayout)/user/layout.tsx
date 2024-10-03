import React from 'react'

const UserLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <p>User navbar</p>
        {children}
        <p>User footer</p>
    </div>
  )
}

export default UserLayout
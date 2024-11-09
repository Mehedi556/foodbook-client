import ManageUserButtons from '@/src/app/_components/manage-users/ManageUserButtons';
import { getAllUsers } from '@/src/services/AuthService';
import { IUser } from '@/src/types';
import React from 'react'

const page = async () => {

    const {data} = await getAllUsers();

  return (
    <div className="container mx-auto p-8 text-colorPrimary">
    <h1 className="text-3xl font-semibold mb-6 text-center">Manage All Users</h1>

    <div className="overflow-x-auto rounded-lg">
      <table className="min-w-full table-auto bg-solid rounded-lg shadow-lg">
        <thead className="bg-solid border">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-colorPrimary uppercase tracking-wider">Picture</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-colorPrimary uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-colorPrimary uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-colorPrimary uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className='bg-solid'>
          {data?.map((user:IUser) => (
            <tr key={user._id} className={`bg-transparent`}>
              <td className="px-6 py-4">
                <img
                  src={user.profilePicture}
                  alt={`${user.name}'s profile`}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </td>
              <td className="px-6 py-4 text-sm font-medium text-colorPrimary">{user.name}</td>
              <td className="px-6 py-4 text-sm text-colorPrimary">{user.email}</td>
              <td className="px-6 py-4 flex justify-center space-x-4">
                <ManageUserButtons user={user} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default page
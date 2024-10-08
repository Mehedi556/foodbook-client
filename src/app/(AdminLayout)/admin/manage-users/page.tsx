import ManageUserButtons from '@/src/app/components/manage-users/ManageUserButtons';
import { getAllUsers } from '@/src/services/AuthService';
import { IUser } from '@/src/types';
import React from 'react'

const page = async () => {

    const { data } = await getAllUsers();
    // console.log(data);

  return (
    <div className="container mx-auto p-8">
    <h1 className="text-3xl font-semibold mb-6 text-center">Manage All Users</h1>

    <div className="overflow-x-auto rounded-lg">
      <table className="min-w-full table-auto bg-solid rounded-lg shadow-lg">
        <thead className="bg-solid">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Picture</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className='bg-gradient'>
          {data?.map((user:IUser) => (
            <tr key={user._id} className={`bg-transparent`}>
              <td className="px-6 py-4">
                <img
                  src={user.profilePicture}
                  alt={`${user.name}'s profile`}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </td>
              <td className="px-6 py-4 text-sm font-medium text-white">{user.name}</td>
              <td className="px-6 py-4 text-sm text-white">{user.email}</td>
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
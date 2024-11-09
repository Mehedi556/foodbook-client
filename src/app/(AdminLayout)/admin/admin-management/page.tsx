import CreateAdminModal from '@/src/app/_components/admin-management/CreateAdminModal';
import ManageAdminButtons from '@/src/app/_components/admin-management/ManageAdminButton';
import { getAllUsers } from '@/src/services/AuthService';
import { IUser } from '@/src/types';
import React from 'react'

const AdminManagement = async () => {
    const {data} = await getAllUsers();

    const admins = data?.filter((admin:IUser) => admin.role == 'admin')


  return (
    <div className="container mx-auto p-8 text-colorPrimary">
      <div className='flex justify-between items-center'>
        <h1 className="text-3xl font-semibold mb-6">Manage All Admins</h1>
        <div>
          <CreateAdminModal />
        </div>
        
      </div>
    

    <div className="overflow-x-auto rounded-lg">
      <table className="min-w-full table-auto bg-solid rounded-lg shadow-lg">
        <thead className="bg-solid">
          <tr className='border'>
            <th className="px-6 py-3 text-left text-xs font-medium text-colorPrimary uppercase tracking-wider">Picture</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-colorPrimary uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-colorPrimary uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-colorPrimary uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className='bg-solid'>
          {admins?.map((user:IUser) => (
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
                <ManageAdminButtons user={user} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default AdminManagement
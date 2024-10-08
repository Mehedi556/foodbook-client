"use client"
import { useBlockOrUnblockUser, useDeleteUser } from '@/src/hooks/auth.hook';
import React from 'react'

const ManageUserButtons = ({ user }: { user: any }) => {
    const { mutate: handleBlockOrUnblock } = useBlockOrUnblockUser()
    const { mutate: handleDeleteUser } = useDeleteUser()

    const handleBlock = (userId: string) => {
        handleBlockOrUnblock({_id: userId})
    };

    const handleDelete = (userId: string) => {
        handleDeleteUser({_id: userId});
    };
    return (
        <>
            <button
                onClick={() => handleBlock(user._id)}
                className={`px-4 py-2 rounded text-sm font-semibold ${user?.userStatus == 'blocked'
                        ? 'bg-red-500 text-white hover:bg-red-400'
                        : 'bg-yellow-500 text-white hover:bg-yellow-400'
                    }`}
            >
                {user?.userStatus == 'blocked' ? 'Unblock' : 'Block'}
            </button>
            <button
                onClick={() => handleDelete(user._id)}
                className="px-4 py-2 bg-red-600 text-white rounded text-sm font-semibold hover:bg-red-500"
            >
                Delete
            </button>
        </>
    )
}

export default ManageUserButtons
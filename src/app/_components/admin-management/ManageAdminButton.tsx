"use client"
import { useBlockOrUnblockUser, useDeleteUser } from '@/src/hooks/auth.hook';
import { Pencil, Trash2 } from 'lucide-react';
import UpdateAdminModal from './UpdateAdminModal';

const ManageAdminButtons = ({ user }: { user: any }) => {
    const { mutate: handleDeleteUser } = useDeleteUser()

    const handleDelete = (userId: string) => {
        handleDeleteUser({_id: userId});
    };
    return (
        <>
            <UpdateAdminModal userData={user} />
            <button
                onClick={() => handleDelete(user._id)}
                className="px-4 py-2 text-red-600 rounded text-sm font-semibold"
            >
                <Trash2 />
            </button>
        </>
    )
}

export default ManageAdminButtons
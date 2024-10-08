"use client"
import React from 'react'

const ManageUserButtons = ({user}:{user:any}) => {
    const handleBlock = (userId: string) => {
        // Block/unblock user logic here
        console.log(`User ${userId} blocked/unblocked`);
      };
    
      const handleDelete = (userId: string) => {
        // Delete user logic here
        console.log(`User ${userId} deleted`);
      };
  return (
    <>
    <button
                  onClick={() => handleBlock(user.id)}
                  className={`px-4 py-2 rounded text-sm font-semibold ${
                    user.isBlocked
                      ? 'bg-red-500 text-white hover:bg-red-400'
                      : 'bg-yellow-500 text-white hover:bg-yellow-400'
                  }`}
                >
                  {user.isBlocked ? 'Unblock' : 'Block'}
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded text-sm font-semibold hover:bg-red-500"
                >
                  Delete
                </button>
    </>
  )
}

export default ManageUserButtons
"use client"
import React from 'react';
import { Button } from '@nextui-org/button';
import ReusableSecondModal from './ReusableSecondModal';
import { Trash2 } from 'lucide-react';
import { useDeleteComment,  } from '@/src/hooks/recipe.hook';

const DeleteCommentModal = ({ postId, commentId }: { postId: string, commentId: string }) => {
    const { mutate: handleDeleteComment } = useDeleteComment()
  const handleDelete = (onClose: () => void) => {
    handleDeleteComment({ postId: postId, commentId: commentId })
    onClose()
  };

  return (
    <ReusableSecondModal 
      size='lg' 
      title='Delete Comment?'
      trigger={(onOpen) => (
        <Button variant="solid" size='sm' className=" bg-[#884D80]" onPress={onOpen}>

          <Trash2 />
        </Button>
      )}
    >
      {(onClose) => (
        <div className='w-full flex flex-col gap-y-3 max-h-[300px]'>
          <p className='text-white font-bold text-xl text-center'>
            Are you sure you want to delete this Comment?
          </p>
          <div className='flex justify-center'>
            <button
              onClick={() => handleDelete(onClose)} 
              className='mr-1 bg-red-600 text-white py-2 px-3 rounded-xl'>
              Confirm Delete
            </button>
          </div>
        </div>
      )}
    </ReusableSecondModal>
  );
};

export default DeleteCommentModal;
































    // <ReusableModal size='lg' buttonText='Delete' title='Type your email for change password'>
    //   <div className='w-full flex flex-col gap-y-3 max-h-[300px]'>
    //     <p className='text-white font-bold text-xl text-center'>Are you sure, You want to delete this post?</p>

    //     <div className='flex justify-center'>
    //         <button onClick={handleDelete} className='mr-1 bg-red-600 text-white py-2 px-3 rounded-xl'>Delete</button>
    //     </div>
        

    //   </div>
    // </ReusableModal>
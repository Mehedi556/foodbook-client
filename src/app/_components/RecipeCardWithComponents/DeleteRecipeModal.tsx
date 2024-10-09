"use client"
import React from 'react';
import { Button } from '@nextui-org/button';
import ReusableSecondModal from './ReusableSecondModal';
import { Trash2 } from 'lucide-react';
import { useDeleteRecipe } from '@/src/hooks/recipe.hook';

const DeleteRecipeModal = ({ _id }: { _id: string }) => {
    const { mutate: handleDeleteRecipe } = useDeleteRecipe()
  const handleDelete = (onClose: () => void) => {
    handleDeleteRecipe({_id: _id})
  };

  return (
    <ReusableSecondModal 
      size='lg' 
      title='Are you sure you want to delete this post?'
      trigger={(onOpen) => (
        <Button variant="solid" radius="sm" className="w-full bg-[#884D80] flex items-center justify-start gap-x-2" onPress={onOpen}>

          <Trash2 /> <p>Delete</p>
        </Button>
      )}
    >
      {(onClose) => (
        <div className='w-full flex flex-col gap-y-3 max-h-[300px]'>
          <p className='text-white font-bold text-xl text-center'>
            Are you sure you want to delete this post?
          </p>
          <div className='flex justify-center'>
            <button
              onClick={() => handleDelete(onClose)} // Use onClose to close the modal
              className='mr-1 bg-red-600 text-white py-2 px-3 rounded-xl'>
              Confirm Delete
            </button>
          </div>
        </div>
      )}
    </ReusableSecondModal>
  );
};

export default DeleteRecipeModal;
































    // <ReusableModal size='lg' buttonText='Delete' title='Type your email for change password'>
    //   <div className='w-full flex flex-col gap-y-3 max-h-[300px]'>
    //     <p className='text-white font-bold text-xl text-center'>Are you sure, You want to delete this post?</p>

    //     <div className='flex justify-center'>
    //         <button onClick={handleDelete} className='mr-1 bg-red-600 text-white py-2 px-3 rounded-xl'>Delete</button>
    //     </div>
        

    //   </div>
    // </ReusableModal>
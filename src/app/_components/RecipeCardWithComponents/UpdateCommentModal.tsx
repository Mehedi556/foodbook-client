"use client"
import React, { useState } from 'react'
import ReusableSecondModal from './ReusableSecondModal';
import { Pencil } from 'lucide-react';
import { Button } from '@nextui-org/button';
import { Span } from 'next/dist/trace';
import { useUpdateComment } from '@/src/hooks/recipe.hook';

const UpdateCommentModal = ({comment}: {comment:any}) => {
    const [value, setValue] = useState(comment?.content || '')
    const { mutate: handleUpdateComment } = useUpdateComment()

    const handleCloseModal = (onClose: () => void) => {
        onClose();
    };

    const handleUpdateModal = (e:any) => {
        e.preventDefault()
        const updatedData = {
            postId: comment?.postId,
            commentId: comment?._id,
            content: value
        }
        handleUpdateComment(updatedData)
    }

  return (
        <ReusableSecondModal
            size='lg'
            title='Update comment'
            trigger={(onOpen) => (
                <span>
                    <Button size='sm' onPress={onOpen} className="text-white rounded-lg bg-solid"><Pencil /></Button>
                </span>
                
            )}
        >
            {(onClose) => (
                <div className='w-full flex flex-col gap-y-3 z-50'>
                    <div className='flex justify-center'>
                        <div className="bg-white p-4 sm:p-8 m-3 sm:m-0 rounded-lg shadow-lg w-full overflow-y-scroll">
                            <form action="#" method="POST" className="space-y-3 sm:space-y-4 ">
                                <div className="">
                                    <input type="text"
                                    onChange={(e:any) => setValue(e.target.value)}
                                    value={value}
                                        className="peer w-full px-4 py-2 text-gray-900 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-solid" placeholder="Recipe title" />
                                </div>

                                <button type="submit"
                                disabled={!value}
                                
                                    onClick={(e) => {
                                        handleUpdateModal(e)
                                        handleCloseModal(onClose)}
                                    }
                                    className="w-full px-4 py-3 font-semibold text-white bg-[#884D80]  hover:bg-gradient rounded-lg  transition duration-300">Update Comment</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </ReusableSecondModal>
    
  )
}

export default UpdateCommentModal
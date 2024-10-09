"use client"
import React, { useState } from 'react'
import ReusableModal from './ReusableModal'
import { Image } from '@nextui-org/image'
import userLogo from '@/src/assets/user.png'
import { IComment } from '@/src/types/recipe.type'
import { formatDistanceToNow } from 'date-fns'
import { useUser } from '@/src/context/user.provider'
import { Button } from '@nextui-org/button'
import { useAddComment } from '@/src/hooks/recipe.hook'

const timeAgo = (timestamp: string) => {
    return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
};

const CommentModal = ({ recipeId, comments }: { recipeId: string, comments: IComment[] }) => {
    // console.log(comments);
    const [text, setText] = useState('')

    const { user } = useUser();

    const { mutate: addComment } = useAddComment()

    const handleAddComment = () => {
        const commentData = {
            author: user?._id!,
            content: text,
            postId: recipeId
        }

        addComment(commentData);
    }

    

  return (
    <ReusableModal size='xl' buttonText='Comments' title='All Comments'>
      <div className='w-full flex flex-col gap-y-3 max-h-[300px] overflow-y-scroll'>
        {
            comments?.length < 1 ? <p className='text-center'>No comments to show.</p> : <>
                {
          comments?.map((comment) => (
            <div className='flex gap-x-2'>
              <img  className='rounded-full h-10 w-10' src={comment?.author?.profilePicture} />
              <div className='rounded-xl bg-solid text-white p-2'>
                <div className='flex justify-between items-center'>
                    <p className='font-semibold pb-1 text-sm'>{comment?.author?.name}</p>
                    <p className='font-semibold pb-1 text-xs text-white'>{timeAgo(comment?.createdAt as any)}</p>
                </div>
                
                <p className='text-xs font-light'>{comment?.content}</p>
              </div>
            </div>
          ))
        }
            </>
                
            
        }
        

        <div className='flex gap-x-2'>
            <img className='rounded-full h-10 w-10' src={user?.profilePicture} />
            <input onChange={(e) => setText(e.target.value)} value={text} className='py-2 w-full rounded-xl text-sm placeholder:text-sm placeholder:pl-3 bg-solid focus:outline-none pl-2' placeholder={`Comment as ${user?.name}`} type="text" name="" id="" />
            <button disabled={!text} onClick={handleAddComment} className='mr-1 bg-solid text-white py-2 px-3 rounded-xl'>Send</button>
        </div>

      </div>
    </ReusableModal>
  )
}

export default CommentModal
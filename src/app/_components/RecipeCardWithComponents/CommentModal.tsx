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
import ReusableSecondModal from './ReusableSecondModal'
import { Ellipsis, MessageSquareText } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/popover'
import UpdateCommentModal from './UpdateCommentModal'
import { Tooltip } from '@nextui-org/tooltip'
import DeleteCommentModal from './DeleteCommentModal'

const timeAgo = (timestamp: string) => {
  return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
};

const CommentModal = ({ recipeId, comments }: { recipeId: string, comments: IComment[] }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  console.log(comments);
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
    <ReusableSecondModal
      size='lg'
      title='All comments'
      trigger={(onOpen) => (
        <Button className={`px-4 py-2 rounded text-sm text-colorSolid bg-colorSecondary font-semibold flex items-center gap-x-2`} onPress={onOpen}>
          <MessageSquareText /> <span className='hidden md:block'>Comments</span>
        </Button>
      )}
    >
      {(onClose) => (
        <div className='w-full flex flex-col gap-y-3 max-h-[300px] overflow-y-scroll'>
          {
            comments?.length < 1 ? <p className='text-center'>No comments to show.</p> : <>
              {
                comments?.map((comment) => (
                  <div className='flex gap-x-2'>
                    <img className='rounded-full h-10 w-10' src={comment?.author?.profilePicture} />
                    <div className='flex items-center gap-x-2 '>
                      <div className='rounded-xl bg-colorSecondary text-colorPrimary p-2'>
                        <div className='flex gap-x-3 justify-between items-center'>
                          <p className='font-semibold pb-1 text-sm'>{comment?.author?.name}</p>
                          <p className='font-semibold pb-1 text-xs text-colorPrimary'>{timeAgo(comment?.createdAt as any)}</p>
                        </div>
                        <p className='text-xs'>{comment?.content}</p>
                      </div>
                    </div>

                    {
                      user?._id == comment?.author?._id && <UpdateCommentModal comment={comment} />
                    }
                    {
                      user?._id == comment?.author?._id && <DeleteCommentModal postId={recipeId} commentId={comment?._id!} />
                    }
                      
                  </div>
                ))
              }
            </>
          }

          <div className='flex gap-x-2'>
            <img className='rounded-full h-10 w-10' src={user?.profilePicture} />
            <input onChange={(e) => setText(e.target.value)} value={text} className='py-2 w-full rounded-xl text-sm placeholder:text-sm placeholder:text-slate-600 placeholder:pl-3 bg-colorSecondary focus:outline-none pl-2' placeholder={`Comment as ${user?.name}`} type="text" name="" id="" />
            <button disabled={!text} onClick={handleAddComment} className='mr-1 bg-colorSecondary text-colorPrimary py-2 px-3 rounded-xl'>Send</button>
          </div>

        </div>
      )}
    </ReusableSecondModal>


  )
}

export default CommentModal
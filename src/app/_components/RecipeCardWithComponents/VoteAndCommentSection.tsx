"use client"
import { useUser } from '@/src/context/user.provider'
import { useUpdateVote } from '@/src/hooks/recipe.hook'
import { Button } from '@nextui-org/button'
import { ArrowBigDown, ArrowBigUp, ListCollapse, MessageSquareText } from 'lucide-react'
import React from 'react'
import ReusableModal from './ReusableModal'
import CommentModal from './CommentModal'
import { IComment } from '@/src/types/recipe.type'

const VoteAndCommentSection = ({ comments, recipeId, upvotes, downvotes }: { comments: IComment[], recipeId: string, upvotes: any, downvotes: any }) => {
  const {
    mutate: handleUpdateVote
  } = useUpdateVote();

  const { user } = useUser();

  const isIdExistsInUpvote = upvotes?.find((id: string) => id == user?._id)
  const isIdExistsInDownvote = downvotes?.find((id: string) => id == user?._id)

  const handleVote = (vote: string) => {
    const voteData = {
      recipeId: recipeId,
      vote,
      voterId: user?._id!
    }
    handleUpdateVote(voteData)
  }
  return (
    <div className="flex p-5 gap-x-2 py-3 pb-5">
      <div className="flex-1 flex gap-x-1">
        <button onClick={() => handleVote('up-vote')} className=" bg-[#884D80] px-3 rounded-lg" ><ArrowBigUp className='text-[30px]' stroke="white" fill={`${isIdExistsInUpvote ? 'white' : 'none'}`} /></button>
        <button onClick={() => handleVote('down-vote')} className="bg-[#884D80] px-3 rounded-lg" ><ArrowBigDown className='text-[30px]' stroke="white" fill={`${isIdExistsInDownvote ? 'white' : 'none'}`} /></button>
      </div>
      {/* <CommentModal>
      <Button variant="solid" radius="sm" className="flex-1 bg-[#884D80]">Comment <MessageSquareText size={20} fill="none" /></Button>
      </CommentModal> */}
      <div className='flex-1 flex justify-end gap-x-2'>
        <Button radius='sm' className={`px-4 py-2 rounded text-sm text-white bg-solid font-semibold flex items-center gap-x-1`}>
          <ListCollapse /> <span className='hidden md:block'>Details</span>
        </Button>
        <CommentModal recipeId={recipeId} comments={comments} />
      </div>


    </div>
  )
}

export default VoteAndCommentSection
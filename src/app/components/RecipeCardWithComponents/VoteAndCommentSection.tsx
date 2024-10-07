"use client"
import { useUser } from '@/src/context/user.provider'
import { useUpdateVote } from '@/src/hooks/recipe.hook'
import { Button } from '@nextui-org/button'
import { ArrowBigDown, ArrowBigUp, MessageSquareText } from 'lucide-react'
import React from 'react'
import ReusableModal from './ReusableModal'
import CommentModal from './CommentModal'
import { IComment } from '@/src/types/recipe.type'

const VoteAndCommentSection = ({comments, recipeId, upvotes, downvotes}:{comments: IComment[], recipeId:string, upvotes: any, downvotes:any}) => {
  const {
    mutate: handleUpdateVote
  } = useUpdateVote();

  const { user } = useUser();

  const isIdExistsInUpvote = upvotes?.find((id:string) => id == user?._id)
  const isIdExistsInDownvote = downvotes?.find((id:string) => id == user?._id)

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
        <Button onClick={() => handleVote('up-vote')} className=" bg-[#884D80]" radius="sm"><ArrowBigUp size={40} stroke="white" fill={`${isIdExistsInUpvote ? 'white' : 'none'}`} /></Button>
        <Button onClick={() => handleVote('down-vote')} className="bg-[#884D80]" radius="sm"><ArrowBigDown size={40} stroke="white" fill={`${isIdExistsInDownvote ? 'white' : 'none'}`} /></Button>
      </div>
      {/* <CommentModal>
      <Button variant="solid" radius="sm" className="flex-1 bg-[#884D80]">Comment <MessageSquareText size={20} fill="none" /></Button>
      </CommentModal> */}
      <div className='flex-1'>
        <CommentModal recipeId={recipeId} comments={comments}/>
      </div>
      
      
    </div>
  )
}

export default VoteAndCommentSection
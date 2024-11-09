"use client"
import { useUser } from '@/src/context/user.provider'
import { useUpdateVote } from '@/src/hooks/recipe.hook'
import { Button } from '@nextui-org/button'
import { ArrowBigDown, ArrowBigUp, ListCollapse, MessageSquareText } from 'lucide-react'
import React from 'react'
import ReusableModal from './ReusableModal'
import CommentModal from './CommentModal'
import { IComment } from '@/src/types/recipe.type'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { toast } from 'sonner'

const isSubscriptionValid = (expiresIn:any) => {
  const currentDate = new Date();
  const expirationDate = new Date(expiresIn);
  return currentDate <= expirationDate;
};

const VoteAndCommentSection = ({ comments, recipeId, upvotes, downvotes, postStatus }: { comments: IComment[], recipeId: string, upvotes: any, downvotes: any, postStatus: string }) => {
  const {
    mutate: handleUpdateVote
  } = useUpdateVote();

  const { user } = useUser();
  const pathname = usePathname();
  const router = useRouter()
  const shouldRenderLink = !pathname.includes(`/${user?.role}/recipe-details/`)

  

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

  const handlePush = () => {
    if(user?.role == 'admin'){
      router.push(`/${user?.role}/recipe-details/${recipeId}`)
    } else if(user?.role == 'user'){

      if(postStatus == 'premium'){
        if(user?.memberStatus?.status == 'premium' && isSubscriptionValid(user?.memberStatus?.expiresIn)){
          router.push(`/${user?.role}/recipe-details/${recipeId}`)
        } else {
          router.push('/user/subscription')
          user?.memberStatus?.status == 'non-premium' ? toast.error('Please buy a subscription for access premium content') : toast.error('Your subscription has expired, Please renew your subscription..')
        }
      } else {
        router.push(`/${user?.role}/recipe-details/${recipeId}`)
      }
    }
  }
  return (
    <div className="flex justify-between p-5 pt-0 gap-x-2 pb-5 mt-2">
      <div className="flex-1 flex gap-x-1">
        <button onClick={() => handleVote('up-vote')} className=" bg-colorSecondary px-3 rounded-lg" ><ArrowBigUp className='text-[30px]' stroke="white" fill={`${isIdExistsInUpvote ? 'white' : 'none'}`} /></button>
        <button onClick={() => handleVote('down-vote')} className="bg-colorSecondary px-3 rounded-lg" ><ArrowBigDown className='text-[30px]' stroke="white" fill={`${isIdExistsInDownvote ? 'white' : 'none'}`} /></button>
      </div>
      {/* <CommentModal>
      <Button variant="solid" radius="sm" className="flex-1 bg-[#884D80]">Comment <MessageSquareText size={20} fill="none" /></Button>
      </CommentModal> */}
      <div className='flex-1 flex justify-end gap-x-1'>
        {
          shouldRenderLink && <Button onClick={handlePush} className={`px-4 py-2 rounded text-sm text-colorPrimary bg-colorSecondary font-semibold flex items-center gap-x-1`}>
            <ListCollapse /> <span className='hidden md:block'>Details</span>
          </Button>
        }

        <CommentModal recipeId={recipeId} comments={comments} />
      </div>


    </div>
  )
}

export default VoteAndCommentSection
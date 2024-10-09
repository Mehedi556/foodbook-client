"use client"
import { Image } from '@nextui-org/image'
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import React from 'react'
import { IRecipe } from '@/src/types/recipe.type'
import { formatDistanceToNow } from 'date-fns';
import VoteAndCommentSection from './VoteAndCommentSection'
import FollowButton from './FollowButton'
import { ArrowBigDown, ArrowBigUp, ListCollapse, MessageSquareText, Settings, UserPlus } from 'lucide-react';
import DeleteRecipeModal from './DeleteRecipeModal';
import UpdateRecipeModal from '../feed/UpdateRecipeModal';
import Link from 'next/link';
import { toast } from 'sonner';
import { Button } from '@nextui-org/button';

const timeAgo = (timestamp: string) => {
    return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
};


const RecipeCardForCommonLayout = ({ recipe }: { recipe: IRecipe }) => {

    const handleToast = () => {
        toast.error('For any activities you have to login.')
    }

    return (
        <div className="w-full mx-auto my-10 rounded-lg bg-gradient-to-t from-[#A8BFFF] to-[#884D80]">
            <div className="flex justify-between items-center p-5 pb-0">
                <div className="flex items-center gap-x-3">
                    <Image src={recipe?.author?.profilePicture} width={50} height={50} alt="user profile picture" className="border rounded-full p-1" />
                    <div>
                        <p>{recipe?.author?.name}</p>
                        <p className="text-xs">{timeAgo(recipe?.createdAt as any)}</p>
                    </div>
                </div>
                <Popover placement="bottom-end">
                    <PopoverTrigger className='cursor-pointer'>
                        <Settings />
                    </PopoverTrigger>
                    <PopoverContent className='bg-gradientSecondary w-[200px]'>
                        <div className="w-full flex flex-col gap-y-2 py-2">

                            <Link onClick={handleToast} href='/login' className="text-white mr-2 flex gap-x-2 rounded-lg w-full items-center py-2 px-2 bg-solid"><UserPlus /> <p>Follow</p></Link>

                            {/* <UpdateRecipeModal data={recipe} /> */}

                            {/* <DeleteRecipeModal _id={recipe?._id!} /> */}

                        </div>
                    </PopoverContent>
                </Popover>
            </div>
            <div className="p-5 ">
                <p className="text-base pb-3 text-slate-200">{recipe?.description}</p>
                <div className="h-[250px] sm:h-[300px] md:h-[370px] lg:h-[470px] xl:h-[570px] ">
                    <img alt="post image" src={recipe?.image[0]} className="object-center object-cover h-full w-full rounded-lg" />
                </div>

            </div>
            <div className="flex justify-between items-center p-5 py-0">
                <p>{recipe?.upvotes.length} peoples like this post.</p>
                <p>{recipe?.comments.length} comments</p>
            </div>
            <div className="flex p-5 gap-x-2 py-3 pb-5">
                <div className="flex-1 flex gap-x-1">
                    <Link onClick={handleToast} href='/login' className=" bg-[#884D80] px-3 rounded-lg flex justify-center items-center" ><ArrowBigUp className='text-[30px]' stroke="white" /></Link>
                    <Link onClick={handleToast} href='/login' className="bg-[#884D80] px-3 rounded-lg flex justify-center items-center" ><ArrowBigDown className='text-[30px]' stroke="white" /></Link>
                </div>
                {/* <CommentModal>
      <Button variant="solid" radius="sm" className="flex-1 bg-[#884D80]">Comment <MessageSquareText size={20} fill="none" /></Button>
      </CommentModal> */}
                <div className='flex-1 flex justify-end gap-x-2'>
                    <Link onClick={handleToast} href='/login' className={`px-4 py-2 rounded text-sm text-white bg-solid font-semibold flex items-center gap-x-1`}>
                        <ListCollapse /> <span className='hidden md:block'>Details</span>
                    </Link>
                    <Link onClick={handleToast} href='/login' className={`px-4 py-2 rounded text-sm text-white bg-solid font-semibold flex items-center gap-x-2`} >
                        <MessageSquareText /> <span className='hidden md:block'>Comments</span>
                    </Link>
                </div>


            </div>
        </div>
    )
}

export default RecipeCardForCommonLayout
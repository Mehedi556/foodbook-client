import { Image } from '@nextui-org/image'
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import React from 'react'
import { IRecipe } from '@/src/types/recipe.type'
import { formatDistanceToNow } from 'date-fns';
import VoteAndCommentSection from './VoteAndCommentSection'
import FollowButton from './FollowButton'
import { Settings } from 'lucide-react';
import DeleteRecipeModal from './DeleteRecipeModal';
import UpdateRecipeModal from '../feed/UpdateRecipeModal';

const timeAgo = (timestamp: string) => {
  return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
};

const RecipeCard = ({ recipe, decodedUser }: { recipe: IRecipe, decodedUser:any }) => {

  return (
    <div className="w-full mx-auto my-10 rounded-lg bg-solid shadow-lg text-colorPrimary border border-gray-300">
      <div className="flex justify-between items-center p-5 pb-0">
        <div className="flex items-center gap-x-3">
          <Image src={recipe?.author?.profilePicture} width={50} height={50} alt="user profile picture" className="border border-colorSecondary rounded-full p-1" />
          <div>
            <p className='font-semibold'>{recipe?.author?.name}</p>
            <p className="text-xs">{timeAgo(recipe?.createdAt as any)}</p>
          </div>
        </div>
        <Popover placement="bottom-end">
          <PopoverTrigger className='cursor-pointer'>
            <Settings className='text-colorPrimary' />
          </PopoverTrigger>
          <PopoverContent className='bg-colorSecondary w-[200px]'>
            <div className="w-full flex flex-col gap-y-2 py-2 bg-colorSecondary">
              {
                decodedUser?._id !== recipe?.author?._id && <FollowButton followers={recipe?.author?.followers!} followerId={recipe?.author?._id!} />
              }

              {
                decodedUser?._id == recipe?.author?._id && <UpdateRecipeModal data={recipe} />
              }

              {
                (decodedUser?._id === recipe?.author?._id || decodedUser?.role === 'admin') && <DeleteRecipeModal _id={recipe?._id!} />
              }

            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div className="p-5 ">
        <p className="text-base pb-3">{recipe?.description}</p>
        <div className="h-[250px] sm:h-[300px] md:h-[370px] lg:h-[470px] xl:h-[570px] relative">
          <img alt="post image" src={recipe?.image[0]} className="object-center object-cover h-full w-full rounded-lg" />
          {
            recipe?.postStatus == 'premium' && <p className='absolute right-5 top-5 py-1 px-3 rounded-lg bg-yellow-600 text-white text-sm'>Premium</p>
          }
        </div>

      </div>
      <div className="flex justify-between items-center p-5 py-0">
        <p>{recipe?.upvotes.length} peoples like this post.</p>
        <p>{recipe?.comments.length} comments</p>
      </div>
      <VoteAndCommentSection comments={recipe?.comments} recipeId={recipe?._id as string} upvotes={recipe?.upvotes} downvotes={recipe?.downvotes} postStatus={recipe?.postStatus} />
    </div>
  )
}

export default RecipeCard
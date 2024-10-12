import { Image as ImageHolder, SmilePlus, Video } from 'lucide-react'
import React from 'react'
import RecipeCard from '../../_components/RecipeCardWithComponents/RecipeCard'
import { IRecipe } from '@/src/types/recipe.type'
import { getRecipes } from '@/src/services/RecipeService'
import { cookies } from 'next/headers'
import { jwtDecode } from 'jwt-decode'
import CreateRecipeModal from '../../_components/feed/CreateRecipeModal'
import { DecodedUser } from '@/src/types/decodedUser.type'


const AdminLayoutPage = async () => {
  const accessToken = cookies().get('accessToken')?.value;
  let decodedUser: DecodedUser | null = null;

  if (accessToken) {
    decodedUser = await jwtDecode(accessToken);
  }

  const { data } = await getRecipes()

  return (
    <div className=''>
      <div className='mt-10  px-5 lg:px-20'>
        <h1 className='font-bold text-2xl text-white text-left'>Feeds</h1>

        <form className='border p-4 md:p-10 py-5 rounded-xl mt-5'>
          <p className='text-white font-semibold text-base md:text-xl pb-3'>Share your recipe</p>
          <div className="relative cursor-pointer">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <div>
              <CreateRecipeModal />
            </div>



          </div>

          <div className='flex gap-x-8 mt-4'>
            <div className='flex gap-x-2 items-center'>
              <Video />
              <p className='hidden lg:block'>Shorts/Videos</p>
            </div>
            <div className='flex gap-x-2 items-center'>
              <ImageHolder />
              <p className='hidden lg:block'>Images/Photos</p>
            </div>
            <div className='flex gap-x-2 items-center'>
              <SmilePlus />
              <p className='hidden lg:block'>Feelings</p>
            </div>
          </div>
        </form>
        

        <div>
          {
            data?.result?.map((recipe: IRecipe) => <RecipeCard recipe={recipe} decodedUser={decodedUser} />)
          }
        </div>

      </div>
    </div>
  )
}

export default AdminLayoutPage
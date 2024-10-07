import {  Image as ImageHolder, SmilePlus, Video } from 'lucide-react'
import React from 'react'
import RecipeCard from '../../components/RecipeCardWithComponents/RecipeCard'
import { IRecipe } from '@/src/types/recipe.type'
import { getRecipes } from '@/src/services/RecipeService'

const AdminLayoutPage = async () => {

const { data } = await getRecipes()

  return (
    <div className=''>
      <div className='mt-10 px-20'>
        <h1 className='font-bold text-2xl text-white text-left'>Feeds</h1>

        <form className='border p-10 py-5 rounded-xl mt-5'>
          {/* <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Write a post</label> */}
          <p className='text-white font-semibold text-xl pb-3'>Share your recipe</p>
          <div className="relative cursor-pointer">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="search" className="cursor-pointer block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500" placeholder="Write a post..." />
            <button className="text-white absolute end-2.5 bottom-2.5 bg-solid  focus:outline-none font-medium rounded-lg text-sm px-4 py-2 cursor-pointer" disabled>Create</button>
          </div>

          <div className='flex gap-x-8 mt-4'>
            <div className='flex gap-x-2 items-center'>
              <Video />
              <p>Shorts/Videos</p>
            </div>
            <div className='flex gap-x-2 items-center'>
              <ImageHolder />
              <p>Images/Photos</p>
            </div>
            <div className='flex gap-x-2 items-center'>
              <SmilePlus />
              <p>Feelings/Activities</p>
            </div>
          </div>
        </form>

        <div>
          {
            data?.result?.map((recipe:IRecipe) => <RecipeCard recipe={recipe}/>)
          }
        </div>

      </div>
    </div>
  )
}

export default AdminLayoutPage
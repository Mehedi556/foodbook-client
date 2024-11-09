import RecipeCard from '@/src/app/_components/RecipeCardWithComponents/RecipeCard'
import { getMyRecipes } from '@/src/services/RecipeService';
import { IRecipe } from '@/src/types/recipe.type'
import { useToken } from '@/src/utils/useToken';
import React from 'react'

const MyRecipes = async () => {
    const decodedUser = await useToken();

    const data = await getMyRecipes(decodedUser?._id!)
    
  return (
    <div className=''>
      <div className='mt-10 px-5 lg:px-20'>
        <h1 className='font-bold text-2xl text-colorPrimary text-left'>My recipes</h1>

        <div>
          {
            data?.data?.map((recipe:IRecipe) => <RecipeCard key={recipe?._id} recipe={recipe} decodedUser={decodedUser}/>)
          }
        </div>

      </div>
    </div>
  )
}

export default MyRecipes
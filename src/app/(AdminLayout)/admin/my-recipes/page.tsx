
import { useUser } from '@/src/context/user.provider'
import { getMyRecipes, getRecipes } from '@/src/services/RecipeService'
import { IRecipe } from '@/src/types/recipe.type'
import React from 'react'
import { cookies } from 'next/headers'
import { jwtDecode } from 'jwt-decode'
import RecipeCard from '@/src/app/components/RecipeCardWithComponents/RecipeCard'

const MyRecipes = async () => {
    const accessToken = cookies().get('accessToken')?.value;
    let decodedUser = null;

    if (accessToken) {
        decodedUser = await jwtDecode(accessToken);
    }


    const {data} = await getMyRecipes(decodedUser?._id!)

    // console.log(data);
    
  return (
    <div className=''>
      <div className='mt-10 px-20'>
        <h1 className='font-bold text-2xl text-white text-left'>My recipes</h1>


        <div>
          {
            data?.map((recipe:IRecipe) => <RecipeCard recipe={recipe}/>)
          }
        </div>

      </div>
    </div>
  )
}

export default MyRecipes
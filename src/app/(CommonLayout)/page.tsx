import Image from "next/image"
import HeroSection from "./_components/hero"
import userIcon from '@/src/assets/user.png'
import postImage from '@/src/assets/banner.jpg'
import { Button } from "@nextui-org/button"
import { Image as NextUiImage } from "@nextui-org/image"
import next from "next"
import { ArrowBigDown, ArrowBigUp, MessageSquareText } from "lucide-react"
import { getRecipes } from "@/src/services/RecipeService"
import { IRecipe } from "@/src/types/recipe.type"
import RecipeCard from "../_components/RecipeCardWithComponents/RecipeCard"
import { useToken } from "@/src/utils/useToken"
import RecipeCardForCommonLayout from "../_components/RecipeCardWithComponents/RecipeCardForCommonLayout"


const page = async () => {
  const { data } = await getRecipes()
  const decodedUser = await useToken()
  // console.log(decodedUser);
  return (
    <div>
      <HeroSection />

      {
        decodedUser?._id ? (
          <div className="mx-auto p-2 w-12/12 md:w-10/12 lg:w-8/12 xl:w-6/12">
            {
              data?.result?.map((recipe: IRecipe) => <RecipeCard key={recipe?._id} recipe={recipe} decodedUser={decodedUser} />)
            }
          </div>
        )
          :
          (
            <div className="mx-auto p-2 w-12/12 md:w-10/12 lg:w-8/12 xl:w-6/12">
              {
                data?.result?.map((recipe: IRecipe) => <RecipeCardForCommonLayout key={recipe?._id} recipe={recipe} />)
              }
            </div>
          )
      }





    </div>
  )
}

export default page
import HeroSection from "./_components/hero"
import DashboardSection from "./_components/dashboardSection"
import Testimonials from "./_components/testimonials"
import PremiumSection from "./_components/premiumSection"
import ChooseUs from "./_components/chooseUs"
// import Image from "next/image"
// import userIcon from '@/src/assets/user.png'
// import postImage from '@/src/assets/banner.jpg'
// import { Button } from "@nextui-org/button"
// import { Image as NextUiImage } from "@nextui-org/image"
// import next from "next"
// import { ArrowBigDown, ArrowBigUp, MessageSquareText } from "lucide-react"
// import { getRecipes } from "@/src/services/RecipeService"
// import { IRecipe } from "@/src/types/recipe.type"
// import RecipeCard from "../_components/RecipeCardWithComponents/RecipeCard"
// import { useToken } from "@/src/utils/useToken"
// import RecipeCardForCommonLayout from "../_components/RecipeCardWithComponents/RecipeCardForCommonLayout"
// import dashboardImg from "@/src/assets/dashboard.png"
// import Link from "next/link"
// import { IoFastFoodOutline } from "react-icons/io5";
// import { TbBrowserX } from "react-icons/tb";
// import { MdOutlineCollectionsBookmark, MdOutlineFeaturedVideo } from "react-icons/md";


const page = async () => {
  // const queryData = {
  //   searchTerm: '',
  //   filter: { filterProperty: '', filterValue: '' },
  //   sortData: ''
  // }
  // const { data } = await getRecipes('');
  // const sortedRecipes = data?.result?.sort((a: any, b: any) => b.upvotes.length - a.upvotes.length);
  // const decodedUser = await useToken()
  // console.log(decodedUser);
  return (
    <div>
      <HeroSection />

      <DashboardSection />

      <PremiumSection />

      <Testimonials />

      <ChooseUs />

      {/* <div className="mt-[-80px] z-50 opacity-100 bg-solid">
        <Image className="max-w-[1280px] mx-auto rounded-xl shadow-lg shadow-colorSolid " alt="" src={dashboardImg} />
      </div> */}

      

      {/* {
        decodedUser?._id ? (
          <div className="mx-auto p-2 w-12/12 md:w-10/12 lg:w-8/12 xl:w-6/12">
            {
              sortedRecipes?.map((recipe: IRecipe) => <RecipeCard key={recipe?._id} recipe={recipe} decodedUser={decodedUser} />)
            }
          </div>
        )
          :
          (
            <div className="mx-auto p-2 w-12/12 md:w-10/12 lg:w-8/12 xl:w-6/12">
              {
                sortedRecipes?.map((recipe: IRecipe) => <RecipeCardForCommonLayout key={recipe?._id} recipe={recipe} />)
              }
            </div>
          )
      } */}

    </div>
  )
}

export default page
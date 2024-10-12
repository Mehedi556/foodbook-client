import VoteAndCommentSection from '@/src/app/_components/RecipeCardWithComponents/VoteAndCommentSection';
import { getRecipeDetails } from '@/src/services/RecipeService';
import React from 'react'

const page = async ({ params }: { params: { recipeId: string } }) => {
  const { data } = await getRecipeDetails(params?.recipeId)
  // console.log(data);

  return (
    <div className="min-h-screen bg-gradientSecondary p-4 md:p-8">
      <div className="max-w-6xl mx-auto bg-gradientSecondary shadow-xl rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="relative h-64 md:h-96 w-full">
          <img
            src={data?.image[0]}
            alt="Recipe"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-between items-end p-4">
            <h1 className="text-3xl text-white font-bold">{data?.title}</h1>
            <span className="bg-yellow-500 text-black text-sm px-3 py-1 rounded-full">
              {data?.postStatus}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-10">
        <div className="mb-4">
              <h2 className="text-2xl font-semibold mb-1 text-white">Description</h2>
              <div className="">
                <p className="text-gray-200">
                  {data?.description}
                </p>

              </div>
            </div>
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            {/* Left: Ingredients */}
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
              <ul className="space-y-2">
                {data?.ingredients.map((ingredient: string, index: number) => (
                  <li key={index} className="text-white">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Instructions */}
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
              <div className="space-y-4">
                <p className="text-white">
                  {data?.instructions}
                </p>

              </div>
            </div>
          </div>

          {/* Tags and Author Section */}
          <div className="flex flex-wrap items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              {data?.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div>
              <p className="text-white text-sm mt-3 lg:mt-0">
                Recipe by: <span className="font-semibold">{data?.author?.name}</span>
              </p>
            </div>
          </div>

          {/* Rating and Likes Section */}
            <p className="text-gray-600">
              <span className="font-bold text-yellow-500">Rating:</span> 5 / 5
            </p>
        </div>

        {/* Back Button */}
        <div className="p-0 border-t">
          <div className="flex justify-between items-center px-5 py-2 text-sm sm:text-base">
            <p>{data?.upvotes.length} peoples like this post.</p>
            <p>{data?.comments.length} comments</p>
          </div>
          <VoteAndCommentSection comments={data?.comments} recipeId={data?._id as string} upvotes={data?.upvotes} downvotes={data?.downvotes} postStatus={data?.postStatus}/>
        </div>
      </div>
    </div>
  )
}

export default page
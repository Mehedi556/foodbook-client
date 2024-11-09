import Link from 'next/link'
import React from 'react'
import { IoFastFoodOutline } from 'react-icons/io5'
import { MdOutlineCollectionsBookmark, MdOutlineFeaturedVideo } from 'react-icons/md'
import { TbBrowserX } from 'react-icons/tb'

const PremiumSection = () => {
  return (
    <section className="py-16 lg:py-32 max-w-[1280px] mx-auto px-4">

      <h2 className="text-2xl sm:text-4xl font-bold text-center text-colorSolid">
          Join Premium Membership
          </h2>
          <p className="text-sm sm:text-lg text-colorSolid text-center mt-2 sm:mt-4 mb-10 sm:mb-16">
            Unlock premium content and exclusive features to enhance your cooking journey. Enjoy a seamless, ad-free experience while accessing special recipes and personalized tools.
          </p>
      <div className="container mx-auto lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-3">
        {/* Left Side - Benefits Section */}
        <div className="lg:w-2/3 space-y-8">
          {/* Title and Subtitle */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Benefit 1 */}
            <div className="flex items-start">
            <IoFastFoodOutline className="text-6xl text-colorSolid"/>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-colorPrimary">Exclusive Recipes</h3>
                <p className="text-gray-600">Access premium recipes available only to members.</p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-start">
              <TbBrowserX className="text-6xl text-colorSolid"/>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-colorPrimary">Ad-Free Browsing</h3>
                <p className="text-gray-600">Enjoy uninterrupted browsing with no ads.</p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex items-start">
              <MdOutlineCollectionsBookmark className="text-6xl text-colorSolid" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-colorPrimary">Personalized Collections</h3>
                <p className="text-gray-600">Create collections to organize your favorite recipes.</p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="flex items-start">
            <MdOutlineFeaturedVideo className="text-6xl text-colorSolid" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-colorPrimary">Early Access to New Features</h3>
                <p className="text-gray-600">Be the first to try our latest features and tools.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Call to Action */}
        <div className="mt-12 lg:mt-0 lg:w-1/3 bg-white text-colorPrimary p-8 rounded-lg text-center shadow-lg shadow-colorSecondary">
          <h3 className="text-2xl font-bold">Experience the Best of FoodBook</h3>
          <p className="mt-4 text-lg">
            Only <span className="font-semibold text-3xl">$9.99</span> / month
          </p>
          <p className="mt-2 text-sm">
            Access exclusive content and features tailored just for you.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-block bg-colorSecondary py-3 px-8 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Upgrade to Premium
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PremiumSection
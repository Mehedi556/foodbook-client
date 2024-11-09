import Link from 'next/link'
import React from 'react'
import dashboardImg from '@/src/assets/dashboard.png'
import Image from 'next/image'

const DashboardSection = () => {
  return (
    <section className="relative max-w-[1280px] mx-auto py-16 lg:py-32 overflow-hidden px-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-colorSolid leading-snug text-center mb-10 sm:mb-16">
        Your Recipe Dashboard: All Your Culinary Essentials
        </h2>
        {/* Main Container */}
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
            {/* Left Side - Image with Floating Cards */}
            <div className="lg:w-1/2 relative flex justify-center lg:justify-start">
              <div className="relative">
                {/* Main Dashboard Image */}
                <Image
                  src={dashboardImg}
                  alt="Dashboard Layout"
                  className="w-full max-w-full rounded-lg shadow-xl transform hover:scale-105 transition duration-300"
                />
                {/* Floating Card - Highlights */}
                {/* <div className="absolute top-8 -right-8 bg-white p-4 rounded-xl shadow-lg w-40 lg:w-48 transform rotate-3">
                <h4 className="text-sm font-semibold text-indigo-700">Interactive Dashboard</h4>
                <p className="text-xs text-gray-600 mt-1">Organize and explore your favorite recipes effortlessly.</p>
              </div>
              <div className="absolute bottom-8 -left-8 bg-white p-4 rounded-xl shadow-lg w-40 lg:w-48 transform -rotate-3">
                <h4 className="text-sm font-semibold text-indigo-700">Quick Access</h4>
                <p className="text-xs text-gray-600 mt-1">Save, share, and access top-rated recipes instantly.</p>
              </div> */}
              </div>
            </div>

            {/* Right Side - Overview Content */}
            <div className="lg:w-1/2 space-y-8">
              {/* Section Title */}
              <div className="">
                <p className="text-base text-colorSolid pb-5">
                  Our dashboard offers a seamless experience for finding, saving, and organizing your favorite recipes.
                  Get started with easy access to all features, including interactive checklists and social tools for food lovers.
                </p>

                {/* Features List */}
                <div className="grid gap-3 md:grid-cols-2">
                  {/* Feature 1 */}
                  <div className="bg-colorSecondary p-4 rounded-xl shadow-md shadow-colorSolid transition">
                    <h3 className="text-lg font-semibold text-colorSolid">Recipe Collections</h3>
                    <p className="text-sm text-colorSolid mt-1">Keep your recipes organized with personal collections.</p>
                  </div>
                  {/* Feature 2 */}
                  <div className="bg-colorSecondary p-4 rounded-xl shadow-md shadow-colorSolid transition">
                    <h3 className="text-lg font-semibold text-colorSolid">Built-in Cooking Timer</h3>
                    <p className="text-sm text-colorSolid mt-1">Never miss a step with our integrated cooking timer.</p>
                  </div>
                  {/* Feature 3 */}
                  <div className="bg-colorSecondary p-4 rounded-xl shadow-md shadow-colorSolid transition">
                    <h3 className="text-lg font-semibold text-colorSolid">Social Engagement</h3>
                    <p className="text-sm text-colorSolid mt-1">Share and discuss recipes with fellow food lovers.</p>
                  </div>
                  {/* Feature 4 */}
                  <div className="bg-colorSecondary p-4 rounded-xl shadow-md shadow-colorSolid transition">
                    <h3 className="text-lg font-semibold text-colorSolid">Ratings & Reviews</h3>
                    <p className="text-sm text-colorSolid mt-1">Rate recipes to help others find the best dishes.</p>
                  </div>
                </div>
              </div>


              {/* Call to Action Button */}
              
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-16 w-full flex justify-center">
                <Link
                  href="/signup"
                  className="inline-block px-8 py-3 bg-colorSecondary text-colorPrimary font-semibold rounded-lg shadow-md  transition duration-300"
                >
                  Join the Community
                </Link>
              </div>
      </section>
  )
}

export default DashboardSection
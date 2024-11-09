import React from 'react'
import { FaRegClock, FaUserFriends, FaStar, FaSearch, FaShieldAlt, FaDollarSign } from 'react-icons/fa';

const sections = [
    {
        title: 'Community & Social Engagement',
        icon: <FaUserFriends size={40} className="text-blue-600 animate-bounce" />,
        description: 'Connect with cooking enthusiasts, follow users, and engage with comments, likes, and shares.',
    },
    {
        title: 'Recipe Sharing & Creation',
        icon: <FaRegClock size={40} className="text-red-500 animate-spin" />,
        description: 'Submit and manage your favorite recipes with rich formatting and image support.',
    },
    {
        title: 'Advanced Search Filters',
        icon: <FaSearch size={40} className="text-green-500 animate-pulse" />,
        description: 'Find recipes easily with filters like ingredients, cooking time, and categories.',
    },
    {
        title: 'Secure Payment & Premium Content',
        icon: <FaDollarSign size={40} className="text-yellow-600 animate-bounce" />,
        description: 'Access exclusive recipes and features with secure payment options and a premium membership.',
    },
    {
        title: 'Ratings & Reviews',
        icon: <FaStar size={40} className="text-purple-500 animate-pulse" />,
        description: 'Rate and review recipes to help others discover the best culinary creations.',
    },
    {
        title: 'Privacy & Security',
        icon: <FaShieldAlt size={40} className="text-teal-500 animate-bounce" />,
        description: 'Your personal data is safe with us, protected by a strict privacy policy.',
    },
];

const ChooseUs = () => {
  return (
    <section className="py-16 lg:py-32 text-colorSolid px-4">
            <div className="max-w-[1280px] mx-auto">
                <h1 className="text-center font-bold text-2xl sm:text-4xl">Why Choose FoodBook?</h1>
                <p className="text-sm sm:text-lg text-center mx-auto mt-2 sm:mt-4 mb-10 sm:mb-16">
                    FoodBook offers an all-in-one platform for passionate cooks and food enthusiasts, with powerful tools for sharing, discovering, and connecting over recipes. See why our community loves it!
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg shadow-colorSecondary transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <div className="mb-4">{section.icon}</div>
                            <h2 className="font-semibold text-lg">{section.title}</h2>
                            <p className="text-sm mt-2">{section.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
  )
}

export default ChooseUs
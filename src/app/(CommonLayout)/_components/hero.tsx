import React from 'react'
import hero from '@/src/assets/banner.jpg'
import Image from 'next/image'
import { Input } from '@nextui-org/input'
import { SearchIcon } from '@/src/assets/icons'

const HeroSection = () => {
  return (
    <div className="max-w-full">
        <div className="relative h-[500px] sm:h-[650px] md:h-[800px] text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image src={hero} alt="Background Image" className="object-cover object-center w-full h-full opacity-50" />
          </div>

          <div className="relative flex flex-col items-center h-full text-center max-w-[1240px] mx-auto mt-40">
            <h1 className="text-2xl sm:text-2xl md:text-5xl font-bold text-white leading-tight mb-4 w-11/12 mx-auto">Discover & Share Your Favorite Recipes</h1>
            <p className="text-sm sm:text-lg md:text-xl text-gray-100 mb-8 w-11/12 mx-auto">Join a community of cooking enthusiasts, explore a world of delicious recipes, and share your culinary creations. Whether you're a seasoned chef or just getting started, find inspiration, rate recipes, and connect with fellow food lovers. Start cooking, rating, and sharing today!</p>


            <div className="pt-5 md:pt-12 lg:pt-20 w-5/5 md:w-4/5 lg:w-3/5 flex-1 mx-auto">
              <form 
              // onSubmit={handleSubmit(onSubmit)} 
              className="flex-1">
                <Input
                className='w-full border border-fuchsia-600 rounded-xl text-white'
                  // {...register('search')}
                  aria-label="Search"
                  classNames={{
                    inputWrapper: "bg-[#884D80] hover:bg-[#884D80] text-white",
                    input: "text-sm",
                  }}
                  placeholder="Search..."
                  size="lg"
                  startContent={
                    <SearchIcon className="pointer-events-none flex-shrink-0 text-base text-white" />
                  }
                  type="text"
                />
              </form>
              {/* {searchResults.length > 0 && (
                <div className="mt-2 rounded-xl bg-default-100 p-3">
                  <div className="space-y-3">
                    {searchResults.map((item, index) => (
                      <Link
                        key={index}
                        className="text-default-900 block rounded-md from-default-200 p-2 transition-all hover:bg-gradient-to-l"
                        href={`/found-items/${item.id}`}
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <img
                              alt="item"
                              className="h-20 w-20 rounded-md"
                              src={item.thumbnail}
                            />
                            <div>
                              <p className="text-lg font-semibold">{item.title}</p>
                              <p className="mt-1 line-clamp-2 h-12 w-full text-sm">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
  )
}

export default HeroSection
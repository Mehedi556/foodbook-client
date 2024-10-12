"use client"
import { SearchIcon } from '@/src/assets/icons'
import { useUser } from '@/src/context/user.provider'
import { useDebounce } from '@/src/hooks/debounce.hook'
import { useSearchItems } from '@/src/hooks/recipe.hook'
import { IRecipe } from '@/src/types/recipe.type'
import { Input } from '@nextui-org/input'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

const isSubscriptionValid = (expiresIn:any) => {
    const currentDate = new Date();
    const expirationDate = new Date(expiresIn);
    return currentDate <= expirationDate;
};

const SearchBar = () => {
    const [searchResults, setSearchResults] = useState([]);
    const { register, watch } = useForm();
    const { mutate: handleSearch, data, isPending, isSuccess } = useSearchItems();
    const { user } = useUser();
    const router = useRouter()

    const searchTerm = useDebounce(watch('search'))

    useEffect(() => {
        if (searchTerm) {
            handleSearch(searchTerm)
        }
    }, [searchTerm])

    useEffect(() => {
        if (!searchTerm) {
            setSearchResults([]);
        }
        if (!isPending && isSuccess && data && searchTerm) {
            setSearchResults(data?.data?.result ?? []);
        }
    }, [isPending, isSuccess, data, searchTerm]);

    const handlePush = (_id:string, status:string) => {
        if(user?.role == 'admin'){
          router.push(`/${user?.role}/recipe-details/${_id}`)
        } else if(user?.role == 'user'){
    
          if(status == 'premium'){
            if(user?.memberStatus?.status == 'premium' && isSubscriptionValid(user?.memberStatus?.expiresIn)){
              router.push(`/${user?.role}/recipe-details/${_id}`)
            } else {
              router.push('/user/subscription')
              user?.memberStatus?.status == 'non-premium' ? toast.error('Please buy a subscription for access premium content') : toast.error('Your subscription has expired, Please renew your subscription..')
            }
          } else {
            router.push(`/${user?.role}/recipe-details/${_id}`)
          }
        }
      }

    return (
        <div className='z-50'>
            <form>
                <Input
                    className='w-full border border-gray-500 shadow-xl rounded-xl text-white placeholder:text-white hover:bg-[#884D80]'
                    {...register('search')}
                    aria-label="Search"
                    color='danger'
                    classNames={{
                        inputWrapper: "bg-[#884D80] text-white",
                        input: "text-sm bg-white",
                    }}
                    placeholder="Search..."
                    size="lg"
                    startContent={
                        <SearchIcon className="pointer-events-none flex-shrink-0 text-base text-white" />
                    }
                    type="text"
                />
            </form>
            {searchResults.length > 0 && (
          <div className="mt-2 rounded-xl bg-gradientSecondary p-3 z-50">
            <div className="space-y-3">
              {searchResults.map((item:IRecipe, index) => (
                <Link
                onClick={() => handlePush(item?._id!, item?.postStatus)}
                  key={index}
                  className="text-default-900 block rounded-md bg-solid p-2 transition-all hover:bg-gradient-to-l"
                  href={`/${user?.role}/recipe-details/${item?._id}`}
                >
                  <div className='flex justify-between items-start'>
                    <div className="flex items-center gap-2">
                      <img
                        alt="item"
                        className="h-20 w-20 rounded-md"
                        src={item?.image[0]}
                      />
                      <div>
                        <p className="text-lg font-semibold">{item.title}</p>
                        <p className="mt-1 line-clamp-2 h-12 w-full text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    {
                        item?.postStatus == 'premium' && <span className="bg-yellow-500 font-bold mt-1 text-white text-sm px-3 py-1 rounded-full">
                        {item?.postStatus}
                      </span>
                    }
                    
                  </div>
                </Link>
              ))}
            </div>
            {/* <div className="mt-3 flex justify-center border-t-1 border-default-50 pt-3">
              <button
                className="flex items-center justify-center gap-1"
                onClick={() => handleSeeAll(searchTerm)}
              >
                <span>See All</span>
              </button>
            </div> */}
          </div>
        )}
        </div>


    )
}

export default SearchBar
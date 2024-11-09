"use client"
import Loading from '@/src/components/Loading';
import envConfig from '@/src/config/envConfig';
import { useUserRegistration } from '@/src/hooks/auth.hook';
import { userSchema } from '@/src/schemas/signup.schema';
import { TUser } from '@/src/types/user.type';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from '@nextui-org/link'
import { ImageUp } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

const image_hosting_api = `https://api.imgbb.com/1/upload`

const SignupPage = () => {
  const router = useRouter();
  const { mutate: handleUserRegistration, data: userData, isPending, isSuccess } = useUserRegistration();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<TUser>({ resolver: zodResolver(userSchema) });

  const onSubmit: SubmitHandler<TUser> = async (data) => {

    try {
      const formData = new FormData();
      formData.append('image', data?.profilePicture[0]);
      formData.append('key', envConfig.imgbbApiKey as string);

      const imageHostResponse = await fetch(image_hosting_api, {
        method: 'POST',
        body: formData
      })

      const imageHost = await imageHostResponse.json();

      const payload:TUser = {
        ...data,
        role: 'user',
        profilePicture: imageHost?.data?.display_url,
        memberStatus: { status: 'non-premium' },
        followers: [],
        following: [],
        userStatus: 'active',
        isDeleted: false
      }


      handleUserRegistration(payload);
    } catch (error) {
      toast.error('Something went wrong', { duration: 2000 })
    }
  }

  if (isSuccess) {
    router.push('/login');
  }

  return (
    <>
      {
        isPending && <Loading />
      }
      <div className="flex items-center justify-center min-h-screen bg-solid">

        <div className="bg-white p-4 sm:p-8 m-3 sm:m-0 rounded-lg shadow-lg w-full max-w-sm shadow-colorSecondary">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Sign Up</h2>

          <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="space-y-3 sm:space-y-5">
            <div className="mb-2 space-y-1">
              <input type="text" {...register("name")}
                className="peer w-full px-4 py-3 text-gray-900 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-colorSecondary" placeholder="Your name..." />
              {
                errors?.name && (
                  <p className="text-xs text-red-400 font-bold">{errors?.name?.message}</p>
                )
              }
            </div>

            <div className="mb-2 space-y-1">
              <input type="email" {...register("email")}
                className="peer w-full px-4 py-3 text-gray-900 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-colorSecondary" placeholder="Your email..." />
              {
                errors?.email && (
                  <p className="text-xs text-red-400 font-bold">{errors?.email?.message}</p>
                )
              }
            </div>

            <div className="">
              <div className="flex flex-col space-y-2">
                <label htmlFor="profilePicture" className="cursor-pointer inline-block w-full text-center px-4 py-2 bg-colorSecondary text-white rounded-md transition duration-300 hover:bg-colorSecondary">
                <ImageUp height={25} width={25} className='mr-1 mt-[-2px] inline'/> Upload Profile Picture
                </label>

                <input
                  type="file"
                  id="profilePicture"
                  {...register("profilePicture")}
                  className="hidden" // Hide the input
                />

                <p className="mt-2 text-sm text-gray-500">
                  {watch("profilePicture")?.[0]?.name ? `Selected file: ${watch("profilePicture")?.[0]?.name}` : "No file selected"}
                </p>
              </div>
              {
                errors?.profilePicture && (
                  <p className="text-xs text-red-400 font-bold">{errors?.profilePicture?.message as string}</p>
                )
              }
            </div>

            <div className="mb-2 space-y-1">
              <input type="password" {...register("password")}
                className="peer w-full px-4 py-3 text-gray-900  bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none focus:border-colorSecondary transition duration-300" placeholder="Password..." />
              {
                errors?.password && (
                  <p className="text-xs text-red-400 font-bold">{errors?.password?.message}</p>
                )
              }
            </div>

            <button type="submit"
              className="w-full px-4 py-3 font-semibold text-colorPrimary bg-colorSecondary  hover:bg-gradient rounded-lg  transition duration-300">Sign
              Up</button>
            <p className="text-xs font-light text-gray-500 text-center">
              Already have an account? <Link href="/login" className="text-sm font-medium text-blue-500 hover:underline ">Log In</Link>
            </p>
          </form>
        </div>

      </div>
    </>

  )
}

export default SignupPage



// background-image: linear-gradient(-225deg, #A8BFFF 0%, #884D80 100%);

// background-image: linear-gradient(to top, #d9afd9 0%, #97d9e1 100%);

// background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
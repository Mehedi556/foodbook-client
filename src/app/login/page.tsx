"use client"
import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import logo from '@/src/assets/logo.png'
import Image from 'next/image'
import { zodResolver } from "@hookform/resolvers/zod";
import loginValidationSchema from '@/src/schemas/login.schema'
import { useUserLogin } from '@/src/hooks/auth.hook'
import { useRouter } from 'next/navigation'
import Loading from '@/src/components/Loading'

type Inputs = {
  email: string;
  password: string;
}

const LoginPage = () => {
  const router = useRouter()
  const { mutate: handleLogin, data, isPending, isSuccess } = useUserLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(loginValidationSchema) })
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    handleLogin(data);
  }

  if (!isPending && isSuccess) {
    router.push('/')
  }


  return (
    <>
      {
        isPending && <Loading />
      }

      <div className="flex items-center justify-center min-h-screen bg-gradient">
        <div className='flex flex-col sm:flex-row items-center bg-white rounded-lg max-w-xl'>
          <Image alt='logo' src={logo} className='h-[200px] w-[200px]' />
          <div className="p-4 sm:p-8 m-3 sm:m-0 rounded-lg shadow-lg ">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Login</h2>

            <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="space-y-5">

              <input type="email" required {...register("email")}
                className="peer w-full px-4 py-3 text-gray-900 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-[#884D80]" placeholder="Your email..." />
              {errors.email && (
                <p className="text-xs text-red-400 font-bold">
                  {errors?.email?.message}
                </p>
              )}


              <input type="password" required {...register("password")}
                className="peer w-full px-4 py-3 text-gray-900  bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none focus:border-[#884D80] transition duration-300" placeholder="Password..." />
              {errors.password && (
                <p className="text-xs text-red-400 font-bold">
                  {errors?.password?.message}
                </p>
              )}


              <Button type="submit"
                className="w-full px-4 py-3 font-semibold text-white bg-[#884D80]  hover:bg-gradient rounded-lg  transition ease-in-out duration-300">Sign
                In</Button>


              <p className="text-xs font-light text-gray-500 text-center">
                Don’t have an account yet? <Link href="/signup" className="text-sm font-medium text-blue-500 hover:underline ">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
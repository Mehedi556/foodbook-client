"use client"
import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import logo from '@/src/assets/logo.png'
import Image from 'next/image'
import { zodResolver } from "@hookform/resolvers/zod";
import loginValidationSchema from '@/src/schemas/login.schema'
import { useUserLogin } from '@/src/hooks/auth.hook'
import { useRouter, useSearchParams } from 'next/navigation'
import Loading from '@/src/components/Loading'
import { useEffect } from 'react'
import { useUser } from '@/src/context/user.provider'
import ForgotPasswordModal from '../_components/login/ForgotPasswordModal'

type Inputs = {
  email: string;
  password: string;
}

const LoginPage = () => {
  const router = useRouter()
  const { setIsLoading: userLoading } = useUser();
  // const searchParams = useSearchParams();
  // const redirect = searchParams.get('redirect');
  const { mutate: handleLogin, data, isPending, isSuccess } = useUserLogin();

  const { user } = useUser();

  useEffect(() => {
    if (!isPending && isSuccess) {
      if (user) {
        router.push(`/${user?.role}`)
      } else {
        router.push('/')
      }
    }
  }, [isPending, isSuccess, user])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(loginValidationSchema) })
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    handleLogin(data);
    userLoading(true)
  }

  const fillAdminCredentials = () => {
    reset({
        email: 'aa@a.com',
        password: 'admin',
    });
};

const fillUserCredentials = () => {
    reset({
        email: 'user@user.com',
        password: 'user',
    });
};


  return (
    <>
      {
        isPending && <Loading />
      }

      <div className="flex items-center justify-center min-h-screen bg-solid">
        <div className='flex flex-col sm:flex-row items-center bg-white rounded-lg max-w-xl shadow-lg shadow-colorSecondary'>
          <Image alt='logo' src={logo} className='h-[200px] w-[200px]' />
          <div className="p-4 sm:p-8 m-3 sm:m-0 rounded-lg shadow-lg ">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Login</h2>

            <div className="flex justify-center space-x-4 mb-6">
          <button
            type="button"
            onClick={fillAdminCredentials}
            className="px-4 py-2 bg-colorSecondary text-colorPrimary text-xs font-semibold rounded-lg transition"
          >
            Admin Credentials
          </button>
          <button
            type="button"
            onClick={fillUserCredentials}
            className="px-4 py-2 bg-colorSecondary text-colorPrimary text-xs font-semibold rounded-lg transition"
          >
            User Credentials
          </button>
        </div>

            <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="space-y-5">

              <input type="email" required {...register("email")}
                className="peer w-full px-4 py-3 text-gray-900 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-colorSecondary" placeholder="Your email..." />
              {errors.email && (
                <p className="text-xs text-red-400 font-bold">
                  {errors?.email?.message}
                </p>
              )}


              <input type="password" required {...register("password")}
                className="peer w-full px-4 py-3 text-gray-900  bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none focus:border-colorSecondary transition duration-300" placeholder="Password..." />
              {errors.password && (
                <p className="text-xs text-red-400 font-bold">
                  {errors?.password?.message}
                </p>
              )}

              <div>
                <Button type="submit"
                className="w-full px-4 py-3 font-semibold text-colorPrimary bg-colorSecondary rounded-lg  transition ease-in-out duration-300">Sign
                In</Button>
                <p className="text-xs font-light text-colorPrimary text-center mt-1">
                  Don’t have an account yet? <Link href="/signup" className="text-sm font-medium text-blue-500 hover:underline ">Sign up</Link>
                </p>
              </div>
              

              <div>
                <p className="text-xs font-light text-colorPrimary text-center mb-1">
                  Forget password?
                </p>
                <div className=""><ForgotPasswordModal /></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
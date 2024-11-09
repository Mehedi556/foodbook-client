"use client"
import React from 'react';
import { Button } from '@nextui-org/button';
import { ImageUp, UserRoundPlus } from 'lucide-react';
import ReusableSecondModal from '../RecipeCardWithComponents/ReusableSecondModal';
import { useUserRegistration } from '@/src/hooks/auth.hook';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TUser } from '@/src/types/user.type';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema } from '@/src/schemas/signup.schema';
import Loading from '@/src/components/Loading';
import { toast } from 'sonner';
import envConfig from '@/src/config/envConfig';

const image_hosting_api = `https://api.imgbb.com/1/upload`

const CreateAdminModal = () => {
    const { mutate: handleUserRegistration, data, isPending } = useUserRegistration();
  
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
            role: 'admin',
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

      const handleCloseModal = (onClose: () => void) => {

        onClose();
      };

  return (
    <ReusableSecondModal 
      size='lg' 
      title='Create New Admin'
      trigger={(onOpen) => (
        <Button variant="solid" radius="sm" className="w-full bg-colorSecondary text-colorPrimary flex items-center justify-start gap-x-2" onPress={onOpen}>

          <UserRoundPlus /> <p>Create</p>
        </Button>
      )}
    >
      {(onClose) => (
        <div className='w-full flex flex-col gap-y-3 '>
          <p className='text-colorPrimary font-bold text-xl text-center'>
            Provide Admin Details here...
          </p>
          <>
      {
        isPending && <Loading />
      }
      <div className="flex items-center justify-center text-colorPrimary">

        <div className=" p-4 sm:p-8 m-3 sm:m-0 rounded-lg shadow-lg w-full ">
          <h2 className="text-2xl font-bold mb-6 text-center">Create New Admin</h2>

          <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="space-y-3 sm:space-y-5">
            <div className="mb-2 space-y-1">
              <input type="text" {...register("name")}
                className="peer w-full px-4 py-3 text-gray-900 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-blue-500" placeholder="Your name..." />
              {
                errors?.name && (
                  <p className="text-xs text-red-400 font-bold">{errors?.name?.message}</p>
                )
              }
            </div>

            <div className="mb-2 space-y-1">
              <input type="email" {...register("email")}
                className="peer w-full px-4 py-3 text-gray-900 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-blue-500" placeholder="Your email..." />
              {
                errors?.email && (
                  <p className="text-xs text-red-400 font-bold">{errors?.email?.message}</p>
                )
              }
            </div>

            <div className="">
              <div className="flex flex-col space-y-2">
                <label htmlFor="profilePicture" className="cursor-pointer inline-block w-full text-center px-4 py-2 bg-colorSecondary text-colorPrimary rounded-md transition duration-300 ">
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
                className="peer w-full px-4 py-3 text-gray-900  bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300" placeholder="Password..." />
              {
                errors?.password && (
                  <p className="text-xs text-red-400 font-bold">{errors?.password?.message}</p>
                )
              }
            </div>

            <button type="submit"
                onClick={() => handleCloseModal(onClose)}
              className="w-full px-4 py-3 font-semibold text-colorPrimary bg-colorSecondary  rounded-lg  transition duration-300">Create admin</button>
          </form>
        </div>

      </div>
    </>
        </div>
      )}
    </ReusableSecondModal>
  );
};

export default CreateAdminModal;

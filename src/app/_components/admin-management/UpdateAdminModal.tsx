"use client"
import React, { useEffect } from 'react';
import { Button } from '@nextui-org/button';
import { Pencil } from 'lucide-react';
import ReusableSecondModal from '../RecipeCardWithComponents/ReusableSecondModal';
import { useUpdateUser } from '@/src/hooks/auth.hook';
import { SubmitHandler, useForm } from 'react-hook-form';

import { IUser, IUserForUpdate } from '@/src/types';



const UpdateAdminModal = ({ userData }: { userData: IUser }) => {
    const { mutate: handleUpdateUser } = useUpdateUser()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IUserForUpdate>()

    useEffect(() => {
        reset(userData)
    }, [userData])

    const onSubmit: SubmitHandler<IUserForUpdate> = async (data) => {
        
        try {
            handleUpdateUser(data);

        } catch (error) {
            throw new Error('Failed to update user.');
        }
    };

    const handleCloseModal = (onClose: () => void) => {
        onClose();
    };

    return (
        <ReusableSecondModal
            size='lg'
            title='Update Admin'
            trigger={(onOpen) => (
                <Button  className={`px-4 py-2 rounded text-sm text-green-600 bg-solid font-semibold `} onPress={onOpen}>
                    <Pencil />
                </Button>
            )}
        >
            {(onClose) => (
                <div className='w-full flex flex-col gap-y-3 '>
                    <p className='text-white font-bold text-xl text-center'>
                        Update Admin Details here...
                    </p>
                    <>
                        <div className="flex items-center justify-center w-full">

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 w-full">
                {/* Name Input */}
                <div>
                    <label className="block text-white">Name</label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-2 rounded-lg focus:outline-none bg-solid"
                        {...register('name', { required: true })}
                    />
                </div>

                {/* Email Input */}
                <div>
                    <label className="block text-white">Email</label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-2 rounded-lg focus:outline-none bg-solid"
                        {...register('email', { required: true })}
                    />
                </div>

                {/* Bio Input */}
                <div>
                    <label className="block text-white">Bio</label>
                    <textarea
                        rows={4}
                        placeholder="Tell us a little about yourself..."
                        className="w-full px-4 py-2 rounded-lg focus:outline-none bg-solid"
                        {...register('bio')}
                    />
                </div>


                <div>
                    <button
                    onClick={() => handleCloseModal(onClose)}
                        type="submit"
                        className="w-full px-4 py-2 bg-solid text-white rounded-lg hover:bg-gradient transition-colors duration-300"
                    >
                        Update
                    </button>
                </div>
            </form>

                        </div>
                    </>
                </div>
            )}
        </ReusableSecondModal>
    );
};

export default UpdateAdminModal;

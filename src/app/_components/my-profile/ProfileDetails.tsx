"use client"

import { IUser, IUserForUpdate } from "@/src/types";
import { Pencil } from "lucide-react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
// import profileImage from '@/src/assets/user.png'
import { useEffect, useState } from "react";
import envConfig from "@/src/config/envConfig";
import { useUpdateUser } from "@/src/hooks/auth.hook";

const toBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            resolve(reader.result as string);
        };
        reader.onerror = (error) => {
            reject(error);
        };
    });
};

const image_hosting_api = `https://api.imgbb.com/1/upload`

const ProfileDetails = ({ userData }: { userData: IUser }) => {
    const [profileImage, setProfileImage] = useState<string | undefined>(`${userData?.profilePicture}`);

    // console.log(profileImage);

    const { mutate: handleUpdateUser } = useUpdateUser()

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm<IUserForUpdate>()

    useEffect(() => {
        reset(userData)
        setProfileImage(userData?.profilePicture)
    }, [userData])

    const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];

            // Use setValue to update React Hook Form state
            // setValue('profilePicture', e.target.files); // Update the form state with the selected file

            // Create a preview URL for the selected image
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl); // Set the preview image URL

        }
    };

    const onSubmit: SubmitHandler<IUserForUpdate> = async (data) => {
        console.log(data?.profilePicture?.length);
        console.log(data);
        try {
            if (data?.profilePicture && data.profilePicture instanceof FileList) {
                const file = data.profilePicture[0]; // Get the first file
                // const base64String = await toBase64(file); // Convert file to base64

                const formData = new FormData();
                formData.append('image', file);
                formData.append('key', envConfig.imgbbApiKey as string);

                const imageHostResponse = await fetch(image_hosting_api, {
                    method: 'POST',
                    body: formData,
                });

                const imageHost = await imageHostResponse.json();
                console.log(imageHost);

                if (imageHost?.data?.display_url) {
                    data.profilePicture = imageHost.data.display_url;
                } else {
                    throw new Error('Image upload failed');
                }
            }

            handleUpdateUser(data);

        } catch (error) {
            throw new Error('Failed to update user: ' + (error as Error).message);
        }
    };
    return (
        <div className="w-full mx-auto bg-gradient shadow-md rounded-lg  px-5 lg:px-20 pt-10">

        <h1 className='font-bold text-2xl text-white text-left'>Profile details</h1>



            <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0 my-10">
                <div className="flex items-center space-x-6">
                    {/* Profile Picture */}
                    <div className="relative">
                        <Image
                            src={profileImage!}
                            alt="Profile"
                            className="rounded-full border-5 border-fuchsia-600 object-cover object-center"
                            width={120}
                            height={120}
                        />
                        {/* Change Profile Picture Button */}
                        <label htmlFor="profilePicture" className="absolute -bottom-2 -right-2 bg-solid text-white px-3 py-3 rounded-full cursor-pointer">
                            <Pencil />
                            <input
                                id="profilePicture"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                {...register("profilePicture")}
                            />
                        </label>
                    </div>
                    {/* Name and Email */}
                    <div>
                        <h2 className="text-2xl font-bold text-white">{userData?.name}</h2>
                        <p className="text-sm text-white">{userData?.email}</p>
                    </div>
                </div>

                {/* Followers and Following Count */}
                <div className="flex space-x-8">
                    <div className="text-center">
                        <p className="text-lg font-bold text-white">{userData?.followers?.length}</p>
                        <p className="text-sm text-white">Followers</p>
                    </div>
                    <div className="text-center">
                        <p className="text-lg font-bold text-white">{userData?.following?.length}</p>
                        <p className="text-sm text-white">Following</p>
                    </div>
                </div>
            </div>


            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                        type="submit"
                        className="w-full px-4 py-2 bg-solid text-white rounded-lg hover:bg-gradient transition-colors duration-300"
                    >
                        Update Profile
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ProfileDetails
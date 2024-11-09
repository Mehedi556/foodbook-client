"use client"
import Select from 'react-select'
import React, { ChangeEvent, useState } from 'react'
import makeAnimated from 'react-select/animated';
import ReusableSecondModal from '../RecipeCardWithComponents/ReusableSecondModal'
import { SmilePlus, Video, Image as ImageHolder, TrashIcon, Plus, ImageUp } from 'lucide-react';
import { Button } from '@nextui-org/button';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { IRecipe } from '@/src/types/recipe.type';
import { zodResolver } from '@hookform/resolvers/zod';
import envConfig from '@/src/config/envConfig';
import { useUser } from '@/src/context/user.provider';
import { useCreatePost } from '@/src/hooks/recipe.hook';
import { recipeSchema } from '@/src/schemas/recipe.schema';

export const tags = [
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'dairy_free', label: 'Dairy-Free' },
    { value: 'low_carb', label: 'Low Carb' },
    { value: 'high_protein', label: 'High Protein' },
    { value: 'breakfast', label: 'Breakfast' },
    { value: 'lunch', label: 'Lunch' },
    { value: 'dinner', label: 'Dinner' },
    { value: 'dessert', label: 'Dessert' },
    { value: 'snack', label: 'Snack' },
    { value: 'spicy', label: 'Spicy' },
    { value: 'sweet', label: 'Sweet' },
    { value: 'quick_easy', label: 'Quick & Easy' },
    { value: 'holiday', label: 'Holiday' },
    { value: 'seafood', label: 'Seafood' },
    { value: 'bbq', label: 'BBQ' },
    { value: 'grilling', label: 'Grilling' },
    { value: 'baking', label: 'Baking' },
    { value: 'healthy', label: 'Healthy' },
    { value: 'asian', label: 'Asian' },
    { value: 'italian', label: 'Italian' },
    { value: 'mexican', label: 'Mexican' },
    { value: 'american', label: 'American' }
];

export const postStatus = [
    { value: "premium", label: "Premium" },
    { value: "non-premium", label: "Non-premium" }
];

const CreateRecipeModal = () => {
    const [imageFiles, setImageFiles] = useState<File[] | []>([]);

    const { user } = useUser();
    const { mutate: handleCreatePost} = useCreatePost()

    const animatedComponents = makeAnimated();


    const {
        register,
        handleSubmit,
        reset,
        setValue,
        watch,
        control,
        formState: { errors },
    } = useForm<IRecipe>({
        resolver: zodResolver(recipeSchema) 
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "ingredients",
    });

    const onSubmit: SubmitHandler<IRecipe> = async (data) => {
        try{
            const uploadedImageUrls: string[] = [];
            const files = data.image;

            for (let i = 0; i < files.length; i++) {
                const formData = new FormData();
                formData.append('image', files[i]);
                formData.append('key', envConfig.imgbbApiKey as string);

                const imageHostResponse = await fetch(envConfig.imgbbApiUrl!, {
                method: 'POST',
                body: formData
                });

                const imageHost = await imageHostResponse.json();
                uploadedImageUrls.push(imageHost?.data?.display_url);
            }

            const payload = {
                ...data,
                image: uploadedImageUrls,
                isDeleted: false,
                isPublished: true,
                author: user?._id,
                rating: {
                    totalRatings: 0,
                    ratingCount: 0,
                    averageRating: 0,
                },
                comments: [],
                upvotes: [],
                downvotes: [],
            }

            console.log(payload);

            handleCreatePost(payload)
        }catch(error){
            console.log(error);
        }
    }

    const handleCloseModal = (onClose: () => void) => {
        onClose();
    };

    const handleFieldAppend = () => {
        append('');
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;

        if (files) {
            const newFiles = Array.from(files);

            setImageFiles((prev) => [...prev, ...newFiles]);

            setValue('image', [...imageFiles, ...newFiles]);
        }
    };

    return (
        <ReusableSecondModal
            size='xl'
            title='Share your recipe.'
            trigger={(onOpen) => (
                <Button onPress={onOpen} size='lg' className='w-full bg-white px-0'>
                    <input type="search" id="search" className="cursor-pointer block w-full p-4 ps-10 text-sm text-gray-900  rounded-lg bg-white focus:ring-colorSecondary focus:border-colorSecondary" placeholder="Write a post..." />
                    <span className=" absolute end-2 bottom-1.5 bg-colorSecondary text-colorSolid  focus:outline-none font-medium rounded-lg text-sm px-4 py-2 cursor-pointer">Create</span>
                </Button>
            )}
        >
            {(onClose) => (
                <div className='w-full flex flex-col gap-y-3 text-colorPrimary'>
                    <p className=' font-bold text-xl text-center'>
                        Write details about your recipe here.
                    </p>
                    <div className='flex justify-center'>
                        <div className=" p-4 sm:p-8 m-3 sm:m-0 rounded-lg shadow-lg w-full overflow-y-scroll">
                            <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="space-y-3 sm:space-y-4 ">
                                <div className="">
                                    <input type="text" {...register("title")}
                                        className="peer w-full px-4 py-2 text-gray-900 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-blue-500" placeholder="Recipe title" />
                                    {
                                        errors?.title && (
                                            <p className="text-xs text-red-400 font-bold">{errors?.title?.message}</p>
                                        )
                                    }
                                </div>
                                <div className="">
                                    <textarea {...register("description")}
                                        className="peer w-full px-4 py-2 text-gray-900 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-blue-500" placeholder="Recipe description" />
                                    {
                                        errors?.description && (
                                            <p className="text-xs text-red-400 font-bold">{errors?.description?.message}</p>
                                        )
                                    }
                                </div>

                                <div className="flex justify-between items-center  px-2 ">
                                    <h1 className="text-xl text-black">Add Recipe Ingredients</h1>
                                    <Button className='bg-solid' isIconOnly onClick={() => handleFieldAppend()}>
                                        <Plus />
                                    </Button>
                                </div>

                                <div className="space-y-5">
                                    {fields.map((field, index) => (
                                        <div key={field.id} className="flex gap-2 items-center">
                                            <input type="text" {...register(`ingredients.${index}`)}
                                                className="peer w-full px-4 py-2 text-gray-900 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-blue-500" placeholder="Ingredient" />
                                            <Button
                                                isIconOnly
                                                className="h-10 w-10 bg-red-600 text-white"
                                                onClick={() => remove(index)}
                                            >
                                                <TrashIcon />
                                            </Button>
                                        </div>
                                    ))}
                                    {
                                        errors?.ingredients && (
                                            <p className="text-xs text-red-400 font-bold">{errors?.ingredients?.message as string}</p>
                                        )
                                    }
                                </div>

                                <div className="mt-[-10px]">
                                    <textarea {...register("instructions")}
                                        className="peer w-full px-4 py-2 text-gray-900 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-blue-500" placeholder="Recipe instructions" />
                                    {
                                        errors?.instructions && (
                                            <p className="text-xs text-red-400 font-bold">{errors?.instructions?.message}</p>
                                        )
                                    }
                                </div>

                                <div className="">
                                    <Select
                                        placeholder='Tags..'
                                        className='text-black bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-blue-500'
                                        closeMenuOnSelect={true}
                                        components={animatedComponents}
                                        defaultValue={[]}
                                        isMulti
                                        options={tags}
                                        onChange={(selectedOptions) => {
                                            const valuesArray = selectedOptions.map((option: any) => option.value);
                                            setValue('tags', valuesArray)
                                        }}
                                    />
                                    {
                                        errors?.tags && (
                                            <p className="text-xs text-red-400 font-bold">{errors?.tags?.message}</p>
                                        )
                                    }
                                </div>
                                <div className="">
                                    <Select
                                        placeholder='Post status..'
                                        className='text-black bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-blue-500'
                                        closeMenuOnSelect={true}
                                        options={postStatus}
                                        onChange={(value: any) => {
                                            setValue('postStatus', value?.value)
                                        }}
                                    />
                                    {
                                        errors?.postStatus && (
                                            <p className="text-xs text-red-400 font-bold">{errors?.postStatus?.message}</p>
                                        )
                                    }
                                </div>

                                <div className="">
                                    <div className="flex flex-col space-y-2">
                                        <label htmlFor="image" className="cursor-pointer inline-block w-full text-center px-4 py-2 bg-colorSecondary rounded-md transition duration-300">
                                            <ImageUp height={25} width={25} className='mr-1 mt-[-2px] inline' /> Upload Recipe Pictures
                                        </label>

                                        <input
                                            type="file"
                                            id="image"
                                            // {...register("image")}
                                            className="hidden"
                                            multiple
                                            onChange={handleImageChange}
                                        />

                                        <p className="mt-2 text-sm text-gray-500">
                                            {watch("image")?.length > 0
                                                ? `${watch("image").length} file(s) selected`
                                                : "No file selected"}
                                        </p>
                                    </div>
                                    {
                                        errors?.image && (
                                            <p className="text-xs text-red-400 font-bold">{errors?.image?.message as string}</p>
                                        )
                                    }
                                </div>

                                <button type="submit"
                                    onClick={() => handleCloseModal(onClose)}
                                    className="w-full px-4 py-3 font-semibold bg-colorSecondary rounded-lg  transition duration-300">Create Post</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </ReusableSecondModal>
    )
}

export default CreateRecipeModal




// onClick={() => handleCloseModal(onClose)}
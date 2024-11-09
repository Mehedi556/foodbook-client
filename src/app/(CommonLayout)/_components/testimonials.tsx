"use client"
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';

const Testimonials = () => {
  return (
    <div className='py-16 lg:py-32 px-4'>
            <h1 className="text-center font-bold text-2xl sm:text-4xl text-colorText">Why Users ❤️ FoodBook</h1>
            <p className='text-sm sm:text-lg text-colorSolid text-center mt-2 sm:mt-4 mb-10 sm:mb-16'>Our users share their favorite features and experiences with FoodBook. Read their reviews and see what makes us unique.</p>
            <div className="max-w-[1280px] mx-2 sm:mx-2 lg:mx-auto">
                <div className='h-[40%] mt-3 p-0 bg-gradient rounded-md shadow-xl shadow-color-simple'>
                    <Swiper
                        spaceBetween={30}
                        effect='fade'
                        centeredSlides={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[EffectFade, Autoplay, Pagination, Navigation]}
                        className="mySwiper shadow-xl shadow-colorSecondary"
                    >
                        <SwiperSlide className='relative'>
                            <div className='bg-colorPrimary'>
                                <div className='opacity-30 '>
                                    <img className="object-cover object-center h-[200px] sm:h-[300px] md:h-[500px] w-[100%]" src="https://i.ibb.co.com/qB5VdRh/Chicken-Tikka-Masala-square-FS-51.jpg" alt="" />
                                </div>
                                <div className='absolute top-3 sm:top-8 md:top-16 lg:top-14 left-auto right-auto opacity-100'>
                                    <img className='h-16 w-16 sm:h-24 md:h-32 lg:h-36 sm:w-24 md:w-32 lg:w-36 mx-auto rounded-full object-cover object-center' src="https://i.ibb.co.com/WF6BYyt/abdus-salam-mehedi.jpg" alt="" />
                                    <h1 className='text-slate-200 mt-0 sm:mt-3 md:mt-10 px-10 text-xs sm:text-lg md:text-xl lg:text-2xl text-center'>FoodBook makes sharing and organizing recipes easy, with amazing social features that truly create a community. The rich text editor is a huge plus!</h1>
                                    <p className='mt-5 md:mt-16 text-sm sm:text-base text-white font-semibold text-center'>Lisa Chen</p>
                                    <p className='text-xs sm:text-sm md:text-base text-white text-center'>Food Blogger & Recipe Developer</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='relative'>
                            <div className='bg-colorPrimary'>
                                <div className='opacity-30 '>
                                    <img className="object-cover object-center h-[200px] sm:h-[300px] md:h-[500px] w-[100%]" src="https://i.ibb.co.com/kKjvb3q/Chicken-Biryani-Recipe.jpg" alt="" />
                                </div>
                                <div className='absolute top-3 sm:top-8 md:top-16 lg:top-14 left-auto right-auto opacity-100'>
                                    <img className='h-16 w-16 sm:h-24 md:h-32 lg:h-36 sm:w-24 md:w-32 lg:w-36 mx-auto rounded-full object-cover object-center' src="https://i.ibb.co.com/CV7BWZk/360-F-224869519-a-Rae-Lneq-ALf-PNBzg0xx-MZXghtv-BXkf-IA.jpg" alt="" />
                                    <h1 className='text-slate-200 mt-0 sm:mt-3 md:mt-10 px-10 text-xs sm:text-lg md:text-xl lg:text-2xl text-center'>I love FoodBook’s advanced search filters, ingredient checklist, and the premium recipes! The cooking timer is super helpful for following steps accurately.</h1>
                                    <p className='mt-5 md:mt-16 text-sm sm:text-base text-white font-semibold text-center'>Marco Santorini</p>
                                    <p className='text-xs sm:text-sm md:text-base text-white text-center'>Culinary Arts Student</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='relative'>
                            <div className='bg-colorPrimary'>
                                <div className='opacity-30 '>
                                    <img className="object-cover object-center h-[200px] sm:h-[300px] md:h-[500px] w-[100%]" src="https://i.ibb.co.com/b3kC0MG/Tofu-Stir-Fry-Thumbnail.jpg" alt="" />
                                </div>
                                <div className='absolute top-3 sm:top-8 md:top-16 lg:top-14 left-auto right-auto opacity-100'>
                                    <img className='h-16 w-16 sm:h-24 md:h-32 lg:h-36 sm:w-24 md:w-32 lg:w-36 mx-auto rounded-full object-cover object-center' src="https://i.ibb.co.com/L9v65JS/user.jpg" alt="" />
                                    <h1 className='text-slate-200 mt-0 sm:mt-3 md:mt-10 px-10 text-xs sm:text-lg md:text-xl lg:text-2xl text-center'>FoodBook’s features let me connect with friends, save my favorite recipes, and access unique, healthy dishes in the ad-free premium section.</h1>
                                    <p className='mt-5 md:mt-16 text-sm sm:text-base text-white font-semibold text-center'>Priya Patel</p>
                                    <p className='text-xs sm:text-sm md:text-base text-white text-center'>Home Cook & Health Enthusiast</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='relative'>
                            <div className='bg-colorPrimary'>
                                <div className='opacity-30 '>
                                    <img className="object-cover object-center h-[200px] sm:h-[300px] md:h-[500px] w-[100%]" src="https://i.ibb.co.com/VjMGyVc/20220211142754-margherita-9920-5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg" alt="" />
                                </div>
                                <div className='absolute top-3 sm:top-8 md:top-16 lg:top-14 left-auto right-auto opacity-100'>
                                    <img className='h-16 w-16 sm:h-24 md:h-32 lg:h-36 sm:w-24 md:w-32 lg:w-36 mx-auto rounded-full object-cover object-center' src="https://i.ibb.co.com/b1N9RDh/user2.jpg" alt="" />
                                    <h1 className='text-slate-200 mt-0 sm:mt-3 md:mt-10 px-10 text-xs sm:text-lg md:text-xl lg:text-2xl text-center'>FoodBook’s professional recipe format and interactive community make it a top platform. The admin tools and premium options elevate the experience.</h1>
                                    <p className='mt-5 md:mt-16 text-sm sm:text-base text-white font-semibold text-center'>Jonathan Marks</p>
                                    <p className='text-xs sm:text-sm md:text-base text-white text-center'>Executive Chef</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
  )
}

export default Testimonials
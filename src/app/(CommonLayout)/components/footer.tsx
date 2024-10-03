import { Link } from '@nextui-org/link'
import logo from '@/src/assets/logo.png'
import Image from 'next/image'
import facebook from '@/src/assets/social-icons/facebook.png'
import twitter from '@/src/assets/social-icons/twitter.png'
import instagram from '@/src/assets/social-icons/instagram.png'

const Footer = () => {
  return (
    <div className='bg-[#884D80]'>
            <div className="max-w-[1280px] mx-auto text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 align-items-center py-5">
                <div className='text-center sm:text-left flex flex-col items-center col-span-3 sm:col-span-1'>
                    <h1 className='font-semibold mb-2'>More Links</h1>
                    <div className='text-sm flex flex-col gap-y-1'>
                        <Link className='text-white font-light' href="/home">Home</Link>
                        <Link className='text-white font-light' href="/about">About us</Link>
                        <Link className='text-white font-light' href="/contact">Contact us</Link>
                        <Link className='text-white font-light' href="#">Career</Link>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center col-span-3 sm:col-span-1 mt-6 sm:mt-0 md:mt-0'>
                    <Image className='h-20 w-20' src={logo} alt="" />
                    <p className='text-xl font-bold'>foodbook</p>
                    <div className='flex justify-center gap-x-2 mt-2'>
                        <Image className='w-6 h-6' src={facebook} alt="" />
                        <Image className='w-6 h-6' src={twitter} alt="" />
                        <Image className='w-6 h-6' src={instagram} alt="" />
                    </div>
                </div>
                <div className="col-span-3 sm:col-span-2 md:col-span-1 mt-6 sm:mt-6 md:mt-0">
                    <p className="text-xs text-center font-semibold">Who we are</p>
                    <h1 className='text-xs text-center text-gray-300 px-1 sm:px-3'>FoodBook is a community of food lovers, connecting home cooks and chefs through shared recipes and culinary inspiration. Your go-to hub for creative cooking ideas.</h1>
                    <div className='text-sm text-center mt-5 '>
                        <p>© 2024 <br /> foodbook <br /> All Rights Reserved.</p>
                        
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer
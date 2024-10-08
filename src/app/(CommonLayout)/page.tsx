import Image from "next/image"
import HeroSection from "./components/hero"
import userIcon from '@/src/assets/user.png'
import postImage from '@/src/assets/banner.jpg'
import { Button } from "@nextui-org/button"
import { Image as NextUiImage } from "@nextui-org/image"
import next from "next"
import { ArrowBigDown, ArrowBigUp, MessageSquareText } from "lucide-react"


const page = () => {
  return (
    <div>
      <HeroSection />
      <div>
        <div className="max-w-[800px] mx-auto my-10 rounded-lg bg-gradient-to-t from-[#A8BFFF] to-[#884D80]">
          <div className="flex justify-between items-center p-5 pb-0">
            <div className="flex items-center gap-x-3">
              <Image src={userIcon} width={50} height={50} alt="user profile picture" className="border rounded-full p-1"/>
              <div>
                <p>MD Shafayat Islam</p>
                <p className="text-xs">19 hour ago</p>
              </div>
            </div>
            <button className="text-white mr-2">Follow</button>
          </div>
          <div className="p-5 ">
            <p className="text-base pb-3 text-slate-200">This quick and flavorful recipe is perfect for busy weeknights. Made with fresh ingredients and a blend of herbs and spices, it delivers a savory and satisfying taste. Ready in under 30 minutes, its easy to follow and ideal for both casual meals and special occasions. Serve with your favorite sides for a wholesome meal.</p>
            <div className="h-[670px] ">
              <img alt="post image" src="https://img.freepik.com/free-photo/side-view-cook-making-delicious-pasta_23-2150690631.jpg"  className="object-center object-cover h-full  rounded-lg" />
            </div>
            
          </div>
          <div className="flex justify-between items-center p-5 py-0">
            <p>0 peoples like this post.</p>
            <p>2 comments</p>
          </div>
          <div className="flex p-5 gap-x-2 py-3 pb-5">
            <div className="flex-1 flex gap-x-1">
              <Button className=" bg-[#884D80]" radius="sm"><ArrowBigUp size={40} fill="none"/></Button>
              <Button className="bg-[#884D80]" radius="sm"><ArrowBigDown size={40} fill="none" /></Button>
            </div>
            <Button variant="solid" radius="sm" className="flex-1 bg-[#884D80]">Comment <MessageSquareText size={20} fill="none"/></Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
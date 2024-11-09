"use client"

import { useUser } from "@/src/context/user.provider";
import { useAddFollow } from "@/src/hooks/auth.hook"
import { Button } from "@nextui-org/button";
import { UserPlus } from "lucide-react";

const FollowButton = ({followerId, followers}:{ followerId: string, followers: string[]}) => {
    const { user } = useUser()

    const { mutate: addFollow} = useAddFollow();

    const isFollowing = followers.find(id => id == user?._id)

    const handleFollow = () => {
        addFollow({_id: followerId})
    }
  return (
    <button onClick={handleFollow} className="text-colorPrimary mr-2 flex gap-x-2 rounded-lg w-full items-center py-2 px-2 bg-solid"><UserPlus /> {isFollowing ? <p>Unfollow</p> : <p>Follow</p>}</button>
  )
}

export default FollowButton
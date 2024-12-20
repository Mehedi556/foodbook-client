import ProfileDetails from "@/src/app/_components/my-profile/ProfileDetails"
import { getUserData } from "@/src/services/AuthService"
import { useToken } from "@/src/utils/useToken"

const MyProfilePage = async () => {
    const decodedUser = await useToken()

    const { data } = await getUserData(decodedUser?._id!)
    return (
        <div className="min-h-screen bg-solid flex justify-center ">
            <ProfileDetails userData={data} />
        </div>
    )
}

export default MyProfilePage
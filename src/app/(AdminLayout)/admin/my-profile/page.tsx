import ProfileDetails from '@/src/app/components/my-profile/ProfileDetails'
import { getUserData } from '@/src/services/AuthService'
import { useToken } from '@/src/utils/useToken'

const page = async () => {

    const decodedUser = await useToken()

    const { data } = await getUserData(decodedUser?._id!)

    console.log(data);
    
    return (
        <div className="min-h-screen bg-gradient flex justify-center ">
            <ProfileDetails userData={data} />
        </div>
    )
}

export default page
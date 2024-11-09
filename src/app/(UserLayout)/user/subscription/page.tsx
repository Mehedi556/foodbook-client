import PaymentButton from '@/src/app/_components/subscription/PaymentButton'
import { DecodedUser } from '@/src/types/decodedUser.type';
import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import React from 'react'

const page = async () => {
    const accessToken = cookies().get('accessToken')?.value;
    let decodedUser: DecodedUser | null = null;

    if (accessToken) {
        decodedUser = await jwtDecode(accessToken);
    }
  return (
    <div className="min-h-screen bg-solid text-colorPrimary flex flex-col justify-center items-center p-5">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold ">Join the Premium Recipe Club!</h1>
        <p className="text-lg sm:text-xl  mt-4">
          Unlock exciting, premium content by subscribing to our 30-day monthly pack!
        </p>
      </div>


      <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-8 border-2 border-colorSecondary">

        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold ">30-Day Access</h2>
          <p className="text-xl font-medium  mt-2">$100 for 30 Days</p>
        </div>

        <div className="text-center space-y-4 mb-8">
          <p className="text-lg">🔥 Access to premium and exciting recipe content</p>
          <p className="text-lg">🍲 Get exclusive posts, tips, and tricks</p>
          <p className="text-lg">💡 Early access to new recipes</p>
        </div>

        <div className="text-center">
          <PaymentButton user={decodedUser!}/>
        </div>
      </div>

      <div className="mt-8 text-center ">
        <p>Enjoy full access to all premium recipes for a month. Satisfaction guaranteed!</p>
        <p className="mt-1">Cancel anytime before renewal.</p>
      </div>
    </div>
  )
}

export default page
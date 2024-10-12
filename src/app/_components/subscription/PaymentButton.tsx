"use client"

import { useInitiatePayment } from "@/src/hooks/payment.hook"
import { logout } from "@/src/services/AuthService";
import { DecodedUser } from "@/src/types/decodedUser.type";

const generateTransactionId = (): string => {
    const timestamp = Date.now(); // Current timestamp in milliseconds
    const randomNum = Math.floor(Math.random() * 1000000); // Random 6-digit number
    return `txn_${timestamp}_${randomNum}`;
};

const PaymentButton = ({user}:{user:DecodedUser}) => {
    const transactionId = generateTransactionId();
    const { mutate:handleCreatePayment, data, isSuccess, isPending } = useInitiatePayment();

    if(isSuccess && !isPending){
        window.location.href = data?.data?.payment_url;
        logout();
    }

    const createPayment = () => {
        const payload = {
            transactionId,
            amount: 100,
            name: user?.name,
            email: user?.email,
            address: 'N/A',
            phone: '88019856987445'
        }
        handleCreatePayment(payload);
        
    }
    return (
        <button onClick={createPayment} className="w-full py-4 text-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-700 rounded-full hover:shadow-lg hover:bg-purple-600 focus:outline-none transition duration-200">
            Pay $100 for Subscription
        </button>
    )
}

export default PaymentButton
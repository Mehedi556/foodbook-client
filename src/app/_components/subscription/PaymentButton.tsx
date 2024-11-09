"use client"

import { useInitiatePayment } from "@/src/hooks/payment.hook"
import { logout } from "@/src/services/AuthService";
import { DecodedUser } from "@/src/types/decodedUser.type";
import { Button } from "@nextui-org/button";

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
        <Button onClick={createPayment} className="w-full py-8 text-xl font-semibold text-colorPrimary bg-colorSecondary rounded-full hover:shadow-lg  focus:outline-none transition duration-200">
            Pay $100 for Subscription
        </Button>
    )
}

export default PaymentButton
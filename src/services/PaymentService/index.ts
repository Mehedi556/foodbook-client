"use server"
import axiosInstance from "@/src/lib/AxiosInstance";

export const initiatePayment = async (paymentData: any) => {
    try {
        const { data } = await axiosInstance.post('/payment/initiate-payment', paymentData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return data
    } catch (error) {
        throw new Error("Failed to payment")
    }
}
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { initiatePayment } from "../services/PaymentService";

export const useInitiatePayment = () => {
    return useMutation<any, Error,{ transactionId: string; amount: number; name?: string; email?: string; address: string; phone: string }>({
        mutationKey: ['ADD_COMMENT'],
        mutationFn: async (paymentData) => await initiatePayment(paymentData),
        onSuccess: () => {
            toast.success("Payment initializing")
        },
        onError: (error) => {
            toast.error(error.message);
        }
    })
}
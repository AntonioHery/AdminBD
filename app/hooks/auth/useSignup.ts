import { useMutation } from "@tanstack/react-query"
import { apiSignupClientInstance } from "@/app/services/signupService"

const useSignup = (onSuccessCallback:()=>void) => {
    return useMutation({
        mutationFn: apiSignupClientInstance.post,
        retry: 3,
        onSuccess: () => {
            onSuccessCallback()
        },
    })
}
export default useSignup
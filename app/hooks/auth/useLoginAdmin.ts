import { apiLoginAdminInstance } from "@/app/services/loginService"
import { useMutation } from "@tanstack/react-query"

const useLoginAdmin = (onSuccessCallback:()=>void) => {
    return useMutation({
        mutationFn: apiLoginAdminInstance.post,
        retry: 3,
        onSuccess(response) {
            console.log("Réponse complète du backend :", response.access_token);
            if (response.access_token) {
                localStorage.setItem("access_token", response.access_token);
            } else {
                console.log("Access token is undefined");
            }

            onSuccessCallback()
        },
    })
}

export default useLoginAdmin
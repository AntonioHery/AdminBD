import { useMutation } from "@tanstack/react-query"
import {apiLoginClientInstance} from "../services/loginService"

const useLoginClient = (onSuccessCallback: () => void) => {
    return useMutation({
        mutationFn: apiLoginClientInstance.post,
        retry: 3,
        onSuccess: () => {
            onSuccessCallback()
        },
    })
}

export default useLoginClient



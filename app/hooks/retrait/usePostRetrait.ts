import { useMutation } from "@tanstack/react-query"
import { apiRetraitInstance } from "../../services/retraitService"

const usePostRetrait=( onSuccessCallback:()=>void)=>{
    return useMutation({
        mutationFn: apiRetraitInstance.post,
        retry:3,
        onSuccess:()=>{
            
            onSuccessCallback();

        }
    })
}


export default usePostRetrait
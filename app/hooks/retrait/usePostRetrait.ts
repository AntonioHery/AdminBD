import { useMutation, useQueryClient } from "@tanstack/react-query"
import { apiRetraitInstance } from "../../services/retraitService"

const usePostRetrait=( onSuccessCallback:()=>void)=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: apiRetraitInstance.post,
        retry:3,
        onSuccess:()=>{
            onSuccessCallback();
            queryClient.invalidateQueries({
                queryKey: ["retraits"],
              });

        }
    })
}


export default usePostRetrait
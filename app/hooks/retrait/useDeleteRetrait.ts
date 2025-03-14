import { retraitByIdService } from "@/app/services/retraitService";

import { useMutation } from "@tanstack/react-query"

interface IArgs{
    numRetrait:number
}

const useDeleteRetrait=( onSuccessCallback:()=>void)=>{
    return useMutation({
        mutationFn:({numRetrait}:IArgs)=> retraitByIdService.retraitById(numRetrait).delete(),
        retry:3,
        onSuccess:()=>{
            
            onSuccessCallback();

        }
    })
}


export default useDeleteRetrait
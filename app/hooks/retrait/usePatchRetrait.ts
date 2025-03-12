import { retraitByIdService } from "@/app/services/retraitService";
import { IRetrait } from "@/app/type";
import { useMutation } from "@tanstack/react-query"


const usePatchRetrait=(numretrait:number, onSuccessCallback:()=>void)=>{
    return useMutation({
        mutationFn: retraitByIdService.retraitById<IRetrait>(numretrait).patch,
        retry:3,
        onSuccess:()=>{
            
            onSuccessCallback();

        }
    })
}


export default usePatchRetrait
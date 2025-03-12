import { retraitByIdService } from "@/app/services/retraitService"
import { IRetrait } from "@/app/type"
import { useQuery } from "@tanstack/react-query"

const useGetRetraitById=(numRetrait: number)=>{
    return useQuery<IRetrait>({
        queryKey:["retrait"],
        queryFn:()=>retraitByIdService.retraitById<IRetrait>(numRetrait).getOne()
    })
}

export default useGetRetraitById
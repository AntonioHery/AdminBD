import { auditRetraitServiceStats } from "@/app/services/auditRetraitService"
import { useQuery } from "@tanstack/react-query"

const useGetStats=()=>{
    return useQuery({
        queryKey:["audit-retrait-stats"],
        queryFn:()=>auditRetraitServiceStats.getAll(),
        staleTime: 1000 * 15,
    })
}

export default useGetStats
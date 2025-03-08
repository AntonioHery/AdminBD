import { auditRetraitService } from "@/app/services/auditRetraitService"
import { useQuery } from "@tanstack/react-query"

const useGetAllAudit=()=>{
    return useQuery({
        queryKey:["audit-retrait"],
        queryFn:()=>auditRetraitService.getAll(),
        staleTime: 1000 * 15,
    })
}

export default useGetAllAudit
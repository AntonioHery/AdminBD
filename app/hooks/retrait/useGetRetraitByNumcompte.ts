import { retraitByNumcompteService } from "@/app/services/retraitService";
import { IRetrait } from "@/app/type";
import { useQuery } from "@tanstack/react-query";

const useGetRetraitByNumcompte= (numCompte:number)=>{
    return  useQuery<IRetrait[]>({
        queryKey:["retrait"],
        queryFn:()=> retraitByNumcompteService.retraitByNumcompte<IRetrait>(numCompte).getAll(),
        staleTime: 1000 * 15,
    })
}

export default useGetRetraitByNumcompte
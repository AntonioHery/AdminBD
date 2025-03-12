import { GET_RETRAIT_BY_NUMCOMPTE, RETRAIT_BY_ID, RETRAIT_URL } from "../constants/api-url";
import APIClient from "../lib/apiclient";
import { IRetrait } from "../type";

 const apiRetraitInstance = new APIClient<IRetrait>(RETRAIT_URL);

 class RetraitService{
    retraitByNumcompte= <T>(numCompte:number)=>{
        const url= GET_RETRAIT_BY_NUMCOMPTE(numCompte)
         return new APIClient<T>(url)
    }
 }

 class RetraitServiceById{
   retraitById=<T>(numRetrait:number)=>{
      const url = RETRAIT_BY_ID(numRetrait)
      return new APIClient<T>(url)
 }
}

 const retraitByNumcompteService= new RetraitService()

 const retraitByIdService= new RetraitServiceById()

export { apiRetraitInstance, retraitByNumcompteService, retraitByIdService}
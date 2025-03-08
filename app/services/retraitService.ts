import { GET_RETRAIT_BY_NUMCOMPTE, RETRAIT_URL } from "../constants/api-url";
import APIClient from "../lib/apiclient";
import { IRetrait } from "../type";

 const apiRetraitInstance = new APIClient<IRetrait>(RETRAIT_URL);

 class RetraitService{
    retraitByNumcompte= <T>(numCompte:number)=>{
        const url= GET_RETRAIT_BY_NUMCOMPTE(numCompte)
         return new APIClient<T>(url)
    }
 }

 const retraitByNumcompteService= new RetraitService()

export { apiRetraitInstance, retraitByNumcompteService}
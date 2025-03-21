
export const BASE_URL = "http://localhost:3000";
export const AUTH_LOGIN_URL=`${BASE_URL}/auth`
export const LOGIN_ADMIN_URL =`${AUTH_LOGIN_URL}/admin/login`;
export const LOGIN_CLIENT_URL =`${AUTH_LOGIN_URL}/client/login`;
export const REGISTER_CLIENT_URL =`${BASE_URL}/clients/sign-in`;
export const RETRAIT_URL =`${BASE_URL}/retraits`;
export const GET_ALL_AUDIT_RETRAIT_URL=`${BASE_URL}/audit-retraits/all`
export const GET_ALL_AUDIT_RETRAIT_STATS_URL=`${BASE_URL}/audit-retraits/stats`


export function GET_RETRAIT_BY_NUMCOMPTE(numCompte: number){
    return`${RETRAIT_URL}/client/${numCompte}`
}

export function RETRAIT_BY_ID(numRetrait:number){
    return `${RETRAIT_URL}/id/${numRetrait}`
}

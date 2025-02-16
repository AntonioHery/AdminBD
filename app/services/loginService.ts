
import APIClient from '../lib/apiclient'
import { LOGIN_ADMIN_URL, LOGIN_CLIENT_URL } from '../constants/api-url'
import { IUserLogin } from '../type'

 export const apiLoginClientInstance = new APIClient<IUserLogin>(LOGIN_CLIENT_URL)

 export const apiLoginAdminInstance = new APIClient<IUserLogin>(LOGIN_ADMIN_URL)

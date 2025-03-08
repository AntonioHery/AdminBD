
import APIClient from '../lib/apiclient'
import {  LOGIN_CLIENT_URL, LOGIN_ADMIN_URL } from '../constants/api-url'
import {  IAdminLogin, IUserLogin } from '../type'

  const apiLoginClientInstance = new APIClient<IUserLogin>(LOGIN_CLIENT_URL)

  const apiLoginAdminInstance = new APIClient<IAdminLogin>(LOGIN_ADMIN_URL)

  export{apiLoginAdminInstance,apiLoginClientInstance}
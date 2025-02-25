import { REGISTER_CLIENT_URL } from "../constants/api-url";
import APIClient from "../lib/apiclient";
import { IClient } from "../type";

export const apiSignupClientInstance = new APIClient<IClient>(REGISTER_CLIENT_URL)
import { RETRAIT_URL } from "../constants/api-url";
import APIClient from "../lib/apiclient";
import { IRetrait } from "../type";

export const apiRetraitInstance = new APIClient<IRetrait>(RETRAIT_URL);
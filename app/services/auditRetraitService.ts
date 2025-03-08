import { GET_ALL_AUDIT_RETRAIT_URL } from "../constants/api-url";
import APIClient from "../lib/apiclient";
import { IAuditRetrait } from "../type";

export const auditRetraitService =new APIClient<IAuditRetrait>(GET_ALL_AUDIT_RETRAIT_URL)


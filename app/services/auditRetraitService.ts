import { GET_ALL_AUDIT_RETRAIT_STATS_URL, GET_ALL_AUDIT_RETRAIT_URL } from "../constants/api-url";
import APIClient from "../lib/apiclient";
import { IAuditRetrait, IStats } from "../type";

export const auditRetraitService =new APIClient<IAuditRetrait>(GET_ALL_AUDIT_RETRAIT_URL)

export const auditRetraitServiceStats= new APIClient<IStats>(GET_ALL_AUDIT_RETRAIT_STATS_URL)
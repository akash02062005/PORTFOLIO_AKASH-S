// Professional certifications only — school-era / extracurricular groups are excluded.
import { certGroups } from './certificates'

const EXCLUDED_ISSUERS = ['Hindi · DBHPS']

export const proCertGroups = certGroups.filter((g) => !EXCLUDED_ISSUERS.includes(g.issuer))
export const proCertCount = proCertGroups.reduce((n, g) => n + g.items.length, 0)
export const proIssuerCount = proCertGroups.length

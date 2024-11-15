const API_DOMAIN = process.env.FRONTEND_API_DOMAIN ?? ''
const getRedirectLink = (url: string) => {
    return `${API_DOMAIN}${url}`
}
export default getRedirectLink

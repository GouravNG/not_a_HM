const API_DOMAIN = process.env.API_DOMAIN ?? ''

export const makeGetRequest = async (requestURL: string) => {
    try {
        const data = await fetch(`${API_DOMAIN}${requestURL}`)
        return await data.json()
    } catch (e) {
        if (e instanceof Error) {
            console.log(e.message)
            return {
                code: '500',
                message: 'Something went wrong!!',
            }
        }
    }
}
